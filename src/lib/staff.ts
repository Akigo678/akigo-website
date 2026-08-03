export type StaffProfile = {
  uid: string;
  email: string;
  displayName: string;
  role: string;
  roleId?: string;
  active?: boolean;
  permissions?: string[];
  effectivePermissions?: string[];
  permissionOverrides?: {
    grants?: string[];
    denials?: string[];
  };
};

function normalizePermissionList(value: unknown): string[] {
  if (!Array.isArray(value)) return [];

  return [...new Set(
    value
      .map((item) => (typeof item === "string" ? item.trim() : ""))
      .filter(Boolean),
  )];
}

export function getStaffPermissions(
  profile: StaffProfile | null | undefined,
): string[] {
  if (!profile) return [];

  const role = String(profile.roleId || profile.role || "")
    .trim()
    .toLowerCase();

  if (role === "super_admin") {
    return ["*"];
  }

  const permissions = new Set<string>([
    ...normalizePermissionList(profile.permissions),
    ...normalizePermissionList(profile.effectivePermissions),
    ...normalizePermissionList(profile.permissionOverrides?.grants),
  ]);

  normalizePermissionList(profile.permissionOverrides?.denials).forEach(
    (permission) => permissions.delete(permission),
  );

  return [...permissions];
}

export function hasPermission(
  profile: StaffProfile | null | undefined,
  permission: string,
): boolean {
  const permissions = getStaffPermissions(profile);
  return permissions.includes("*") || permissions.includes(permission);
}

export function hasAnyPermission(
  profile: StaffProfile | null | undefined,
  permissions: readonly string[],
): boolean {
  return permissions.some((permission) => hasPermission(profile, permission));
}

export function hasAllPermissions(
  profile: StaffProfile | null | undefined,
  permissions: readonly string[],
): boolean {
  return permissions.every((permission) => hasPermission(profile, permission));
}
