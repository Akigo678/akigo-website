import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Check,
  CircleCheckBig,
  Database,
  Download,
  FileText,
  Headphones,
  LockKeyhole,
  Mail,
  Settings,
  ShieldCheck,
  Smartphone,
  Trash2,
  UserRound,
} from "lucide-react";

import { MarketingLayout } from "@/components/marketing";
import { SupportEmailCard } from "./SupportEmailCard";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://akigo.org";

export const metadata: Metadata = {
  title: "Delete Your AkiGO Account | AkiGO",
  description:
    "Delete your AkiGO Rider account and request deletion of associated personal information.",
  alternates: {
    canonical: `${SITE_URL}/delete-account`,
  },
  openGraph: {
    title: "Delete Your AkiGO Account | AkiGO",
    description:
      "Delete your AkiGO Rider account and request deletion of associated personal information.",
    url: `${SITE_URL}/delete-account`,
    siteName: "AkiGO",
    type: "website",
  },
};

const supportEmail = "support@akigo.org";

const deletionSteps: Array<{
  number: string;
  title: string;
  Icon: LucideIcon;
}> = [
  { number: "1", title: "Open the AkiGO Rider app", Icon: Smartphone },
  { number: "2", title: "Sign in to your account", Icon: UserRound },
  { number: "3", title: "Open your Profile or Settings", Icon: Settings },
  { number: "4", title: "Scroll to the bottom of the page", Icon: Download },
  { number: "5", title: "Tap Delete Account", Icon: Trash2 },
  {
    number: "6",
    title: "Review the warning and confirm the deletion request",
    Icon: CircleCheckBig,
  },
];

export default function DeleteAccountPage() {
  return (
    <MarketingLayout>
      <main className="page">
        {/* HERO */}
        <section className="hero">
          <div className="heroGlow" />
          <div className="heroGrid" />

          <div className="heroInner">
            <div className="heroCopy">
              <div className="eyebrow">ACCOUNT &amp; DATA CONTROL</div>

              <h1>
                Delete Your
                <br />
                <span>AkiGO Account</span>
              </h1>

              <p className="heroDescription">
                You can permanently delete your AkiGO Rider account and request
                deletion of the personal information associated with it.
              </p>

              <div className="tagline">
                YOUR RIDE. YOUR DATA. YOUR CHOICE.
              </div>
            </div>

            <div className="trustList" aria-label="Account deletion assurances">
              <TrustItem
                Icon={ShieldCheck}
                title="Your Privacy Matters"
                text="You remain in control of your account and data."
              />
              <TrustItem
                Icon={Trash2}
                title="Permanent Deletion"
                text="Your account is removed after the deletion request is completed."
              />
              <TrustItem
                Icon={LockKeyhole}
                title="Safe & Secure"
                text="AkiGO uses safeguards designed to protect your information."
              />
            </div>
          </div>
        </section>

        <div className="content">
          {/* WARNING */}
          <section className="warning">
            <div className="warningIcon">!</div>

            <div>
              <h2>Account deletion is permanent</h2>
              <p>
                Once your deletion request is completed, you may no longer be
                able to recover your AkiGO Rider account, profile, saved
                preferences, or other account information.
              </p>
            </div>
          </section>

          {/* STEP 1 */}
          <section className="processCard">
            <div className="sectionLead">
              <div className="stepCircle">1</div>

              <div>
                <h2>Delete your account in the AkiGO app</h2>
                <p>
                  The fastest way to delete your account is directly from the
                  AkiGO Rider app.
                </p>
              </div>
            </div>

            <div className="stepsGrid">
              {deletionSteps.map(({ number, title, Icon }, index) => (
                <div className="stepItem" key={number}>
                  <div className="stepIconWrap">
                    <Icon size={23} strokeWidth={1.9} aria-hidden="true" />
                  </div>
                  <div className="stepBadge">{number}</div>
                  <div className="stepTitle">{title}</div>

                  {index < deletionSteps.length - 1 ? (
                    <ArrowRight
                      className="stepArrow"
                      size={20}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  ) : null}
                </div>
              ))}
            </div>

            <div className="centerAction">
              <a href="/download#rider" className="downloadButton">
                <Download size={17} aria-hidden="true" />
                Download AkiGO Rider
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
          </section>

          {/* STEP 2 */}
          <section className="requestCard">
            <div className="requestHeader">
              <div className="stepCircle">2</div>

              <div>
                <h2>Request deletion without the app</h2>
                <p>
                  If you no longer have access to the AkiGO Rider app, send an
                  account deletion request to AkiGO Support.
                </p>
              </div>
            </div>

            <div className="requestBody">
              <div className="mailIcon">
                <Mail size={35} strokeWidth={1.8} aria-hidden="true" />
              </div>

              <div className="requestMain">
                <div className="emailLabel">AKIGO SUPPORT EMAIL</div>

                <SupportEmailCard
                  email={supportEmail}
                  subject="AkiGO Account Deletion Request"
                />

                <p className="requestInstruction">
                  Include the email address or phone number associated with your
                  AkiGO account so we can identify the correct account.
                </p>

                <div className="actions">
                  <a
                    href={`mailto:${supportEmail}?subject=AkiGO%20Account%20Deletion%20Request`}
                    className="primaryButton"
                  >
                    <Mail size={16} aria-hidden="true" />
                    Request Account Deletion
                    <ArrowRight size={15} aria-hidden="true" />
                  </a>

                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${supportEmail}&su=AkiGO%20Account%20Deletion%20Request`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gmailButton"
                  >
                    <span className="googleMark" aria-hidden="true">
                      G
                    </span>
                    Open in Gmail
                  </a>
                </div>

                <div className="smallNote">
                  If the email button does not open on your device, copy the
                  support email above and send your request manually.
                </div>
              </div>
            </div>
          </section>

          {/* INFORMATION CARDS */}
          <div className="twoColumn">
            <section className="infoCard">
              <div className="infoIcon">
                <FileText size={25} strokeWidth={1.8} aria-hidden="true" />
              </div>

              <div>
                <h2>What information is deleted</h2>

                <p>
                  When account deletion is completed, AkiGO deletes or
                  de-identifies personal information associated with your
                  account, subject to applicable legal requirements.
                </p>

                <CheckRow>Account profile information</CheckRow>
                <CheckRow>
                  Authentication and account-identifying information
                </CheckRow>
                <CheckRow>Saved rider preferences</CheckRow>
                <CheckRow>
                  Personal information no longer required to provide services
                </CheckRow>
              </div>
            </section>

            <section className="infoCard">
              <div className="infoIcon">
                <Database size={25} strokeWidth={1.8} aria-hidden="true" />
              </div>

              <div>
                <h2>Information that may be retained</h2>

                <p>
                  Certain information may be retained where required for legal,
                  payment, tax, fraud-prevention, safety, dispute-resolution,
                  security, or regulatory purposes.
                </p>

                <CheckRow>Payment and transaction records when required</CheckRow>
                <CheckRow>Trip and usage records where legally required</CheckRow>
                <CheckRow>Fraud-prevention and security information</CheckRow>
                <CheckRow>Regulatory and legal compliance records</CheckRow>
              </div>
            </section>
          </div>

          {/* HELP */}
          <section className="helpCard">
            <div className="helpIcon">
              <Headphones size={26} strokeWidth={1.8} aria-hidden="true" />
            </div>

            <div className="helpText">
              <h2>Need help?</h2>
              <p>
                Contact AkiGO Support if you have questions about your account,
                privacy, or deletion request.
              </p>
            </div>

            <a href="/contact" className="contactButton">
              Contact Support
              <ArrowRight size={15} aria-hidden="true" />
            </a>
          </section>
        </div>

        <style>{`
          * {
            box-sizing: border-box;
          }

          body {
            margin: 0;
            background: #020502;
          }

          .page {
            min-height: 100vh;
            background:
              radial-gradient(circle at 50% 0%, rgba(71, 255, 0, .055), transparent 28%),
              #020502;
            color: #fff;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          }

          .hero {
            position: relative;
            overflow: hidden;
            border-bottom: 1px solid rgba(255,255,255,.05);
            background:
              linear-gradient(90deg, #020202 0%, #000000 52%, #000000 100%);
          }

          .heroGlow {
            position: absolute;
            right: -80px;
            top: -150px;
            width: 600px;
            height: 600px;
            border-radius: 50%;
            background:
              radial-gradient(circle at 45% 45%, rgba(150,237,8,.18), rgba(37,255,0,.055) 40%, transparent 72%);
            filter: blur(2px);
            opacity: .95;
          }

          .heroGrid {
            position: absolute;
            inset: 0 0 0 auto;
            width: 52%;
            background:
              repeating-linear-gradient(
                90deg,
                transparent 0 44px,
                rgba(12, 12, 12, 0.04) 45px 46px
              );
            mask-image: linear-gradient(90deg, transparent, #000);
            opacity: .65;
          }

          .heroInner {
            position: relative;
            z-index: 2;
            width: min(1180px, calc(100% - 48px));
            min-height: 365px;
            margin: 0 auto;
            padding: 62px 0 52px;
            display: grid;
            grid-template-columns: minmax(0, 1.2fr) minmax(320px, .8fr);
            gap: 84px;
            align-items: center;
          }

          .eyebrow {
            margin-bottom: 14px;
            color: #96ED08;
            font-size: 11px;
            font-weight: 900;
            letter-spacing: 4px;
          }

          .hero h1 {
            margin: 0;
            font-size: clamp(48px, 5.2vw, 72px);
            line-height: .96;
            letter-spacing: -3.4px;
            max-width: 720px;
          }

          .hero h1 span {
            color: #96ED08;
          }

          .heroDescription {
            max-width: 610px;
            margin: 20px 0 0;
            color: rgba(255,255,255,.76);
            font-size: 17px;
            line-height: 1.62;
          }

          .tagline {
            margin-top: 22px;
            color: rgba(255,255,255,.68);
            font-size: 11px;
            letter-spacing: 4px;
          }

          .trustList {
            display: grid;
            gap: 20px;
          }

          .trustItem {
            display: grid;
            grid-template-columns: 54px 1fr;
            gap: 18px;
            align-items: center;
          }

          .trustIcon {
            width: 54px;
            height: 54px;
            display: grid;
            place-items: center;
            border: 1px solid rgba(150,237,8,.75);
            border-radius: 14px;
            color: #96ED08;
            background: rgba(0,0,0,.22);
            box-shadow: inset 0 0 20px rgba(150,237,8,.035);
          }

          .trustItem h3 {
            margin: 0;
            font-size: 15px;
            font-weight: 800;
            color: #fff;
          }

          .trustItem p {
            margin: 4px 0 0;
            color: rgba(255,255,255,.62);
            font-size: 12px;
            line-height: 1.5;
          }

          .content {
            width: min(1180px, calc(100% - 48px));
            margin: 0 auto;
            padding: 8px 0 74px;
          }

          .warning {
            margin-top: 0;
            min-height: 112px;
            padding: 24px 28px;
            display: flex;
            align-items: center;
            gap: 24px;
            border: 1px solid rgba(255,65,72,.9);
            border-radius: 16px;
            background:
              linear-gradient(90deg, rgba(117,17,20,.28), rgba(54,9,10,.22));
            box-shadow: inset 0 0 36px rgba(255,47,55,.025);
          }

          .warningIcon {
            width: 52px;
            height: 52px;
            min-width: 52px;
            display: grid;
            place-items: center;
            border: 4px solid #ff545b;
            border-radius: 50%;
            color: #ff545b;
            font-size: 25px;
            font-weight: 900;
          }

          .warning h2 {
            margin: 0 0 7px;
            color: #ff5b61;
            font-size: 18px;
          }

          .warning p {
            margin: 0;
            max-width: 940px;
            color: rgba(255,255,255,.70);
            font-size: 14px;
            line-height: 1.6;
          }

          .processCard,
          .requestCard,
          .infoCard,
          .helpCard {
            border: 1px solid rgba(150,237,8,.25);
            background:
              radial-gradient(circle at 45% 40%, rgba(150,237,8,.035), transparent 42%),
              rgba(4,10,5,.94);
            box-shadow:
              inset 0 1px 0 rgba(255,255,255,.018),
              0 12px 40px rgba(0,0,0,.13);
          }

          .processCard,
          .requestCard {
            margin-top: 22px;
            border-radius: 18px;
            padding: 26px 28px 28px;
          }

          .sectionLead,
          .requestHeader {
            display: flex;
            align-items: flex-start;
            gap: 22px;
          }

          .stepCircle {
            width: 46px;
            height: 46px;
            min-width: 46px;
            display: grid;
            place-items: center;
            border-radius: 50%;
            background: #96ED08;
            color: #020402;
            font-size: 21px;
            font-weight: 950;
          }

          .sectionLead h2,
          .requestHeader h2,
          .infoCard h2,
          .helpCard h2 {
            margin: 0;
            color: #96ED08;
            font-size: 20px;
            line-height: 1.25;
          }

          .sectionLead p,
          .requestHeader p,
          .infoCard p,
          .helpCard p {
            margin: 7px 0 0;
            color: rgba(255,255,255,.67);
            font-size: 13.5px;
            line-height: 1.65;
          }

          .stepsGrid {
            margin-top: 30px;
            display: grid;
            grid-template-columns: repeat(6, minmax(0, 1fr));
            gap: 12px;
          }

          .stepItem {
            position: relative;
            text-align: center;
            padding: 0 10px;
          }

          .stepIconWrap {
            width: 54px;
            height: 54px;
            margin: 0 auto 9px;
            display: grid;
            place-items: center;
            border-radius: 50%;
            color: #fff;
            background: rgba(255,255,255,.055);
            border: 1px solid rgba(255,255,255,.055);
          }

          .stepBadge {
            width: 22px;
            height: 22px;
            margin: -17px auto 7px;
            position: relative;
            z-index: 2;
            display: grid;
            place-items: center;
            border-radius: 50%;
            background: #96ED08;
            color: #020402;
            font-size: 11px;
            font-weight: 950;
            box-shadow: 0 0 0 3px #071008;
          }

          .stepTitle {
            max-width: 132px;
            margin: 0 auto;
            color: rgba(255,255,255,.82);
            font-size: 12px;
            line-height: 1.45;
          }

          .stepArrow {
            position: absolute;
            right: -16px;
            top: 22px;
            color: #96ED08;
            opacity: .88;
          }

          .centerAction {
            margin-top: 26px;
            display: flex;
            justify-content: center;
          }

          .downloadButton,
          .primaryButton,
          .gmailButton,
          .contactButton {
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            border-radius: 12px;
            font-weight: 900;
            transition:
              transform .18s ease,
              border-color .18s ease,
              background .18s ease;
          }

          .downloadButton,
          .primaryButton {
            background: #96ED08;
            color: #020402;
            box-shadow: 0 7px 25px rgba(150,237,8,.09);
          }

          .downloadButton {
            min-height: 45px;
            padding: 0 20px;
            font-size: 13px;
          }

          .downloadButton:hover,
          .primaryButton:hover {
            transform: translateY(-1px);
            background: #a2ff0a;
          }

          .requestBody {
            margin-top: 24px;
            display: grid;
            grid-template-columns: 112px 1fr;
            gap: 26px;
            align-items: start;
          }

          .mailIcon {
            width: 96px;
            height: 96px;
            display: grid;
            place-items: center;
            border: 1px solid rgba(150,237,8,.38);
            border-radius: 19px;
            color: #96ED08;
            background: rgba(150,237,8,.04);
          }

          .requestMain {
            max-width: 760px;
          }

          .emailLabel {
            margin: 0 0 7px;
            color: rgba(255,255,255,.49);
            font-size: 9px;
            font-weight: 800;
            letter-spacing: 3px;
          }

          .emailBox {
            min-height: 52px;
            max-width: 610px;
            padding: 8px 10px 8px 15px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;
            border: 1px solid rgba(255,255,255,.32);
            border-radius: 11px;
            background: rgba(255,255,255,.018);
            transition:
              border-color .2s ease,
              background .2s ease,
              box-shadow .2s ease;
          }

          .emailBox:hover {
            border-color: rgba(150,237,8,.7);
            background: rgba(150,237,8,.025);
          }

          .emailAddressLink {
            min-width: 0;
            color: #fff;
            font-size: 14px;
            font-weight: 850;
            text-decoration: none;
            overflow-wrap: anywhere;
          }

          .emailAddressLink:hover {
            color: #96ED08;
          }

          .copyEmailButton {
            min-width: 93px;
            padding: 9px 12px;
            border: 1px solid rgba(150,237,8,.50);
            border-radius: 9px;
            background: rgba(150,237,8,.06);
            color: #96ED08;
            cursor: pointer;
            font-size: 11px;
            font-weight: 900;
            transition:
              background .18s ease,
              border-color .18s ease,
              transform .15s ease;
          }

          .copyEmailButton:hover {
            background: rgba(150,237,8,.12);
            border-color: #96ED08;
          }

          .copyEmailButton:active {
            transform: translateY(1px);
          }

          .copyEmailButton[data-copied="true"] {
            border-color: #96ED08;
            background: #96ED08;
            color: #020402;
          }

          .requestInstruction {
            margin: 12px 0 0;
            color: rgba(255,255,255,.68);
            font-size: 13px;
            line-height: 1.6;
          }

          .actions {
            margin-top: 20px;
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
          }

          .primaryButton,
          .gmailButton {
            min-height: 45px;
            padding: 0 18px;
            font-size: 13px;
          }

          .gmailButton,
          .contactButton {
            border: 1px solid rgba(255,255,255,.48);
            background: rgba(255,255,255,.015);
            color: #fff;
          }

          .gmailButton:hover,
          .contactButton:hover {
            transform: translateY(-1px);
            border-color: rgba(150,237,8,.52);
            background: rgba(150,237,8,.035);
          }

          .googleMark {
            font-size: 14px;
            font-weight: 950;
          }

          .smallNote {
            margin-top: 11px;
            color: rgba(255,255,255,.44);
            font-size: 11px;
            line-height: 1.5;
          }

          .twoColumn {
            margin-top: 22px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 18px;
          }

          .infoCard {
            min-height: 255px;
            padding: 26px;
            display: grid;
            grid-template-columns: 54px 1fr;
            gap: 18px;
            border-radius: 17px;
          }

          .infoIcon,
          .helpIcon {
            width: 54px;
            height: 54px;
            min-width: 54px;
            display: grid;
            place-items: center;
            border: 1px solid rgba(150,237,8,.72);
            border-radius: 13px;
            color: #96ED08;
            background: rgba(150,237,8,.025);
          }

          .check {
            margin-top: 9px;
            display: flex;
            gap: 9px;
            align-items: flex-start;
            color: rgba(255,255,255,.78);
            font-size: 12.5px;
            line-height: 1.45;
          }

          .checkMark {
            width: 16px;
            height: 16px;
            min-width: 16px;
            margin-top: 1px;
            display: grid;
            place-items: center;
            border-radius: 50%;
            background: #96ED08;
            color: #020402;
          }

          .helpCard {
            margin-top: 22px;
            padding: 22px 26px;
            display: grid;
            grid-template-columns: 54px 1fr auto;
            gap: 18px;
            align-items: center;
            border-radius: 17px;
          }

          .helpText {
            min-width: 0;
          }

          .contactButton {
            min-height: 44px;
            padding: 0 18px;
            font-size: 12px;
          }

          @media (max-width: 980px) {
            .heroInner {
              grid-template-columns: 1fr;
              gap: 34px;
              padding: 52px 0 48px;
            }

            .trustList {
              grid-template-columns: repeat(3, 1fr);
              gap: 14px;
            }

            .trustItem {
              grid-template-columns: 46px 1fr;
              gap: 12px;
            }

            .trustIcon {
              width: 46px;
              height: 46px;
            }

            .stepsGrid {
              grid-template-columns: repeat(3, 1fr);
              gap: 24px 10px;
            }

            .stepArrow {
              display: none;
            }
          }

          @media (max-width: 760px) {
            .heroInner,
            .content {
              width: min(100% - 30px, 1180px);
            }

            .hero h1 {
              font-size: clamp(42px, 11vw, 58px);
              letter-spacing: -2.5px;
            }

            .trustList {
              grid-template-columns: 1fr;
            }

            .warning {
              align-items: flex-start;
            }

            .stepsGrid {
              grid-template-columns: repeat(2, 1fr);
            }

            .requestBody {
              grid-template-columns: 1fr;
            }

            .mailIcon {
              display: none;
            }

            .twoColumn {
              grid-template-columns: 1fr;
            }

            .helpCard {
              grid-template-columns: 54px 1fr;
            }

            .contactButton {
              grid-column: 2;
              justify-self: start;
            }
          }

          @media (max-width: 520px) {
            .heroInner {
              padding: 42px 0 38px;
            }

            .heroDescription {
              font-size: 15px;
            }

            .tagline {
              font-size: 9px;
              letter-spacing: 2.7px;
            }

            .content {
              padding-bottom: 54px;
            }

            .warning,
            .processCard,
            .requestCard,
            .infoCard,
            .helpCard {
              padding: 20px;
            }

            .warningIcon {
              width: 44px;
              height: 44px;
              min-width: 44px;
              border-width: 3px;
              font-size: 22px;
            }

            .sectionLead,
            .requestHeader {
              gap: 14px;
            }

            .stepCircle {
              width: 40px;
              height: 40px;
              min-width: 40px;
              font-size: 18px;
            }

            .stepsGrid {
              grid-template-columns: 1fr;
              gap: 18px;
            }

            .stepItem {
              display: grid;
              grid-template-columns: 48px 26px 1fr;
              align-items: center;
              gap: 10px;
              text-align: left;
              padding: 0;
            }

            .stepIconWrap {
              width: 48px;
              height: 48px;
              margin: 0;
            }

            .stepBadge {
              width: 24px;
              height: 24px;
              margin: 0;
              box-shadow: none;
            }

            .stepTitle {
              max-width: none;
              margin: 0;
            }

            .centerAction {
              justify-content: stretch;
            }

            .downloadButton {
              width: 100%;
            }

            .emailBox {
              align-items: stretch;
              flex-direction: column;
            }

            .copyEmailButton {
              width: 100%;
            }

            .actions {
              display: grid;
            }

            .primaryButton,
            .gmailButton {
              width: 100%;
            }

            .infoCard {
              grid-template-columns: 1fr;
            }

            .infoIcon {
              margin-bottom: -3px;
            }

            .helpCard {
              grid-template-columns: 1fr;
            }

            .contactButton {
              grid-column: auto;
              justify-self: stretch;
            }
          }
        `}</style>
      </main>
    </MarketingLayout>
  );
}

function TrustItem({
  Icon,
  title,
  text,
}: {
  Icon: LucideIcon;
  title: string;
  text: string;
}) {
  return (
    <div className="trustItem">
      <div className="trustIcon">
        <Icon size={25} strokeWidth={1.8} aria-hidden="true" />
      </div>

      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

function CheckRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="check">
      <span className="checkMark" aria-hidden="true">
        <Check size={11} strokeWidth={3} />
      </span>
      <span>{children}</span>
    </div>
  );
}
