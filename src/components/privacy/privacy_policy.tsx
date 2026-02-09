import React from "react";

type BulletListProps = {
  items: string[];
  textColor?: string;
};

type SectionCardProps = {
  title: string;
  icon?: string;
  iconBgColor?: string;
  iconColor?: string;
  children: React.ReactNode;
};

type SubSectionProps = {
  title: string;
  children: React.ReactNode;
};

const styles = {
  page: {
    backgroundColor: "#ffffff",
    color: "#1f2937",
    minHeight: "100vh",
  } as React.CSSProperties,
  container: {
    maxWidth: 980,
    margin: "0 auto",
    padding: "16px",
  } as React.CSSProperties,
  header: {
    display: "flex",
    alignItems: "flex-start",
    gap: 12,
    padding: "12px 16px",
    borderBottom: "1px solid #e5e7eb",
    backgroundColor: "#ffffff",
    position: "sticky",
    top: 0,
    zIndex: 1,
  } as React.CSSProperties,
  backButton: {
    border: "1px solid #e5e7eb",
    background: "#ffffff",
    borderRadius: 8,
    padding: "6px 10px",
    cursor: "pointer",
  } as React.CSSProperties,
  titleBlock: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
  } as React.CSSProperties,
  h1: {
    fontSize: 20,
    margin: 0,
  } as React.CSSProperties,
  muted: {
    color: "#6b7280",
    margin: 0,
  } as React.CSSProperties,
  sectionCard: {
    border: "1px solid #e5e7eb",
    borderRadius: 8,
    padding: 16,
    backgroundColor: "#ffffff",
  } as React.CSSProperties,
  sectionHeader: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    marginBottom: 12,
  } as React.CSSProperties,
  iconWrap: {
    width: 32,
    height: 32,
    borderRadius: 16,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 16,
  } as React.CSSProperties,
  h2: {
    fontSize: 18,
    margin: 0,
  } as React.CSSProperties,
  h3: {
    fontSize: 16,
    margin: "0 0 8px 0",
  } as React.CSSProperties,
  paragraph: {
    margin: "0 0 12px 0",
    lineHeight: 1.6,
  } as React.CSSProperties,
  subSection: {
    marginBottom: 16,
  } as React.CSSProperties,
  ul: {
    margin: "0 0 12px 0",
    paddingLeft: 20,
  } as React.CSSProperties,
  li: {
    marginBottom: 6,
    lineHeight: 1.6,
  } as React.CSSProperties,
  callout: {
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  } as React.CSSProperties,
  footer: {
    padding: "16px 0",
    textAlign: "center",
  } as React.CSSProperties,
};

const BulletList: React.FC<BulletListProps> = ({ items, textColor }) => (
  <ul style={{ ...styles.ul, color: textColor ?? styles.muted.color }}>
    {items.map((item) => (
      <li key={item} style={styles.li}>
        {item}
      </li>
    ))}
  </ul>
);

const SubSection: React.FC<SubSectionProps> = ({ title, children }) => (
  <div style={styles.subSection}>
    <h3 style={styles.h3}>{title}</h3>
    {children}
  </div>
);

const SectionCard: React.FC<SectionCardProps> = ({
  title,
  icon,
  iconBgColor,
  iconColor,
  children,
}) => (
  <section style={styles.sectionCard}>
    <div style={styles.sectionHeader}>
      <span
        aria-hidden="true"
        style={{
          ...styles.iconWrap,
          backgroundColor: iconBgColor ?? "#faf3e6",
          color: iconColor ?? "#d97706",
        }}
      >
        {icon ?? ""}
      </span>
      <h2 style={styles.h2}>{title}</h2>
    </div>
    {children}
  </section>
);

const PrivacyPolicy: React.FC = () => {
  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={styles.titleBlock}>
          <h1 style={styles.h1}>Privacy Policy</h1>
          <p style={styles.muted}>Last updated: January 17, 2025</p>
        </div>
      </header>

      <main style={styles.container}>
        <div style={{ display: "grid", gap: 12 }}>
          <SectionCard title="Introduction" icon="🛡">
            <p style={styles.paragraph}>
              MyAgent Limited ("we," "our," or "us") is committed to protecting
              your privacy and personal data. This Privacy Policy explains how
              we collect, use, disclose, and safeguard your information when you
              use our MyAgent mobile application and related services
              (collectively, the "Service").
            </p>
            <p style={styles.paragraph}>
              By using our Service, you agree to the collection and use of
              information in accordance with this Privacy Policy. This policy
              complies with the Nigeria Data Protection Regulation (NDPR) 2019
              and other applicable data protection laws.
            </p>
            <div
              style={{
                ...styles.callout,
                backgroundColor: "#faf3e6",
                border: "1px solid #f5e8d1",
                color: "#d97706",
              }}
            >
              <p style={{ ...styles.paragraph, margin: 0 }}>
                Important: MyAgent is designed for adults aged 18 and above. We
                do not knowingly collect personal information from children
                under 18 years of age.
              </p>
            </div>
          </SectionCard>

          <SectionCard title="1. Information We Collect" icon="🗄">
            <SubSection title="1.1 Personal Information">
              <p style={styles.paragraph}>
                We collect personal information that you voluntarily provide to
                us, including:
              </p>
              <BulletList
                items={[
                  "Full name and preferred display name",
                  "Email address and phone number",
                  "Profile photograph",
                  "Date of birth (for age verification)",
                  "Residential and/or business address",
                  "Employment information and income details (for tenant verification)",
                  "Emergency contact information",
                ]}
              />
            </SubSection>

            <SubSection title="1.2 Identity Verification Data">
              <p style={styles.paragraph}>
                We verify your identity through licensed third-party
                verification services. We do NOT store your sensitive documents:
              </p>
              <BulletList
                items={[
                  "Government-issued ID verification (National ID, Driver's License, International Passport)",
                  "Bank Verification Number (BVN) verification",
                  "Address verification through utility bills",
                  "Employment and income verification",
                ]}
              />
              <div
                style={{
                  ...styles.callout,
                  backgroundColor: "#e5f9f4",
                  border: "1px solid #c5f1e6",
                  color: "#059669",
                }}
              >
                <h3 style={{ ...styles.h3, marginTop: 0 }}>
                  Important: Your Documents Are Safe
                </h3>
                <p style={{ ...styles.paragraph, margin: 0 }}>
                  We use licensed third-party verification providers (such as
                  Smile Identity and Prembly) who are authorized by regulatory
                  bodies. These services verify your identity and only send us a
                  "verified" or "not verified" status. Your actual ID documents,
                  BVN details, and sensitive information are NOT stored on
                  MyAgent servers. We only receive confirmation of your
                  identity.
                </p>
              </div>
            </SubSection>

            <SubSection title="1.3 Location Information (Foreground Only)">
              <p style={styles.paragraph}>
                We collect location data ONLY when you are actively using the
                app:
              </p>
              <BulletList
                items={[
                  "Precise location when you search for properties (foreground only)",
                  "General location to show properties near you",
                  "Property location data for listings and mapping",
                ]}
              />
              <div
                style={{
                  ...styles.callout,
                  backgroundColor: "#e5f9f4",
                  border: "1px solid #c5f1e6",
                  color: "#059669",
                }}
              >
                <h3 style={{ ...styles.h3, marginTop: 0 }}>Privacy First</h3>
                <p style={{ ...styles.paragraph, margin: 0 }}>
                  We NEVER collect your location in the background. Location
                  tracking stops immediately when you close the app or switch to
                  another screen. You can disable location permissions entirely
                  in your device settings - the app will still work, but
                  property suggestions will be less personalized.
                </p>
              </div>
            </SubSection>

            <SubSection title="1.4 Payment Information">
              <p style={styles.paragraph}>
                All payments are processed by licensed third-party payment
                providers. We do NOT store your payment details:
              </p>
              <BulletList
                items={[
                  "Transaction records (amount, date, status)",
                  "Payment reference numbers",
                  "Transaction history for your account",
                ]}
              />
              <div
                style={{
                  ...styles.callout,
                  backgroundColor: "#e5f9f4",
                  border: "1px solid #c5f1e6",
                  color: "#059669",
                }}
              >
                <h3 style={{ ...styles.h3, marginTop: 0 }}>
                  Your Payment Security
                </h3>
                <p style={{ ...styles.paragraph, margin: 0 }}>
                  MyAgent NEVER stores your bank account numbers, card details,
                  or PINs. All payment processing is handled directly by PCI DSS
                  compliant providers (Paystack, Flutterwave, and licensed
                  Nigerian banks). When you pay, you interact directly with
                  their secure payment gateway. We only receive confirmation
                  that payment was successful or failed.
                </p>
              </div>
            </SubSection>

            <SubSection title="1.5 User-Generated Content and Communications">
              <p style={styles.paragraph}>
                Content you create and share on our platform:
              </p>
              <BulletList
                items={[
                  "Property listings, descriptions, and photographs",
                  "Chat messages and communication logs (monitored for safety and compliance)",
                  "Reviews, ratings, and feedback",
                  "Profile information and preferences",
                  "Support tickets and customer service communications",
                  "Social media content (if you choose to link accounts)",
                ]}
              />
              <div
                style={{
                  ...styles.callout,
                  backgroundColor: "#e5f9f4",
                  border: "1px solid #c5f1e6",
                  color: "#059669",
                }}
              >
                <p style={{ ...styles.paragraph, margin: 0 }}>
                  Communication Monitoring: For your safety and protection, all
                  in-app messages and communications are monitored using
                  automated systems and may be reviewed by our safety team. This
                  helps us prevent fraud, harassment, and ensures compliance
                  with our community standards. Personal contact information
                  shared before payment of commitment fees may result in account
                  restrictions.
                </p>
              </div>
            </SubSection>

            <SubSection title="1.6 Technical and Usage Information">
              <p style={styles.paragraph}>
                Automatically collected when you use our Service:
              </p>
              <BulletList
                items={[
                  "Device information (model, operating system, unique identifiers)",
                  "App usage patterns and feature interactions",
                  "IP address and connection information",
                  "Crash reports and performance data",
                  "Search queries and browsing behavior",
                  "Push notification preferences and delivery status",
                ]}
              />
            </SubSection>

            <SubSection title="1.7 Audio Recordings (Optional)">
              <p style={styles.paragraph}>
                You may choose to use voice features for enhanced communication:
              </p>
              <BulletList
                items={[
                  "Voice messages sent to other users",
                  "Audio notes attached to property inquiries",
                  "Customer support voice calls (with your consent)",
                ]}
              />
              <div
                style={{
                  ...styles.callout,
                  backgroundColor: "#fdf5e6",
                  border: "1px solid #fbe4ba",
                  color: "#d97706",
                }}
              >
                <h3 style={{ ...styles.h3, marginTop: 0 }}>
                  Audio Recording Policy
                </h3>
                <p style={{ ...styles.paragraph, margin: 0 }}>
                  Audio recordings are only made when YOU initiate them (by
                  pressing record). Recordings are stored securely for 90 days
                  and automatically deleted unless required for dispute
                  resolution or legal compliance. Voice messages are subject to
                  the same safety monitoring as text messages. You can delete
                  your voice messages at any time from your conversation
                  history.
                </p>
              </div>
            </SubSection>

            <SubSection title="1.7 Camera and Photos">
              <p style={styles.paragraph}>
                You may use your camera to enhance your experience:
              </p>
              <BulletList
                items={[
                  "Take photos of properties for listings",
                  "Upload profile pictures",
                  "Scan documents for verification (processed by third-party verification services)",
                  "Capture property condition for inspection reports",
                ]}
              />
              <p style={{ ...styles.paragraph, color: styles.muted.color }}>
                Camera access is optional and only activated when you choose to
                take or upload photos. We do not access your camera without your
                explicit action.
              </p>
            </SubSection>
          </SectionCard>

          <SectionCard
            title="Message Safety & Monitoring"
            icon="ℹ"
            iconBgColor="#fdf5e6"
            iconColor="#d97706"
          >
            <div
              style={{
                ...styles.callout,
                backgroundColor: "#fdf5e6",
                border: "1px solid #fbe4ba",
                color: "#d97706",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span aria-hidden="true">🔒</span>
                <h3 style={{ ...styles.h3, margin: 0 }}>For Your Safety</h3>
              </div>
              <p style={styles.paragraph}>
                All messages sent through MyAgent are automatically monitored to
                protect you from:
              </p>
              <BulletList
                items={[
                  "Fraud and scam attempts",
                  "Harassment or threatening behavior",
                  "Sharing of personal contact information before payment (to prevent platform circumvention)",
                  "Inappropriate or discriminatory content",
                ]}
              />
              <div
                style={{
                  ...styles.callout,
                  backgroundColor: "#ffffff",
                  border: "1px solid #f3f4f6",
                  color: styles.muted.color,
                  padding: 10,
                }}
              >
                <p style={{ ...styles.paragraph, margin: 0, fontSize: 13 }}>
                  How It Works: Our automated systems scan messages in
                  real-time. Human review only occurs when safety issues are
                  detected or when users report concerns. We never use message
                  monitoring for advertising purposes.
                </p>
              </div>
            </div>
          </SectionCard>

          <SectionCard title="2. How We Use Your Information" icon="👁">
            <SubSection title="2.1 Core Service Provision">
              <BulletList
                items={[
                  "Account creation, authentication, and management",
                  "Identity verification and KYC compliance",
                  "Property search, listing, and matching services",
                  "Secure messaging and communication between users",
                  "Payment processing, wallet management, and transaction facilitation",
                  "Rental agreement generation and document management",
                  "Customer support and dispute resolution",
                  "Platform security and fraud prevention",
                ]}
              />
            </SubSection>

            <SubSection title="2.2 Service Improvement and Personalization">
              <BulletList
                items={[
                  "Personalizing property recommendations based on your preferences",
                  "Improving app functionality and user experience",
                  "Analyzing usage patterns to enhance our services",
                  "Developing new features and services",
                  "Conducting research and analytics for business insights",
                ]}
              />
            </SubSection>

            <SubSection title="2.3 Safety, Security and Legal Compliance">
              <BulletList
                items={[
                  "Monitoring communications to prevent fraud, scams, and inappropriate behavior",
                  "Detecting and preventing harassment, threats, or discriminatory conduct",
                  "Ensuring compliance with our community standards and platform rules",
                  "Protecting users from potentially harmful or illegal activities",
                  "Preventing circumvention of our safety measures (e.g., sharing contact details prematurely)",
                  "Complying with legal obligations and regulatory requirements",
                  "Enforcing our Terms of Service and user agreements",
                  "Responding to legal requests and court orders",
                ]}
              />
              <div
                style={{
                  ...styles.callout,
                  backgroundColor: "#fdf5e6",
                  border: "1px solid #fcecd0",
                  color: "#d97706",
                }}
              >
                <p style={{ ...styles.paragraph, margin: 0 }}>
                  Your Safety First: Communication monitoring is primarily
                  automated and designed to protect all users. Human review
                  occurs only when our systems detect potential safety issues,
                  policy violations, or when users report concerns. We never use
                  this monitoring for advertising or marketing purposes.
                </p>
              </div>
            </SubSection>

            <div
              style={{
                ...styles.callout,
                backgroundColor: "#fae7eb",
                border: "1px solid #f4c8d1",
                color: "#dc2626",
              }}
            >
              <h3 style={{ ...styles.h3, marginTop: 0 }}>What We DON'T Do</h3>
              <BulletList
                items={[
                  "We do NOT sell your personal data to advertisers or third parties",
                  "We do NOT use your data for marketing unrelated to our housing services",
                  "We do NOT share your location data with unauthorized parties",
                  "We do NOT access your messages for advertising purposes",
                  "We do NOT store your full payment card details on our servers",
                ]}
                textColor="#dc2626"
              />
            </div>
          </SectionCard>

          <SectionCard title="3. Information Sharing and Disclosure" icon="👥">
            <SubSection title="3.1 With Other Users">
              <BulletList
                items={[
                  "Basic profile information when you contact or are contacted about a property",
                  "Verification status (verified/unverified) for trust and safety",
                  "Reviews and ratings you've given or received",
                  "Property listing information if you're a landlord",
                ]}
              />
            </SubSection>

            <SubSection title="3.2 With Service Providers and Partners">
              <BulletList
                items={[
                  "Payment Processors: Paystack, Flutterwave, and other licensed payment providers for transaction processing",
                  "Identity Verification: Smile Identity, Prembly, and other KYC service providers",
                  "Cloud Services: Google Firebase for app infrastructure and data storage",
                  "Communication Services: SMS and email service providers for notifications",
                  "Analytics Partners: Google Analytics and similar services for app improvement",
                  "Customer Support: Third-party support platforms for help desk services",
                ]}
              />
              <p style={{ ...styles.paragraph, color: styles.muted.color }}>
                All service providers are required to maintain the
                confidentiality and security of your information through
                contractual agreements.
              </p>

              <SubSection title="3.3 Legal and Regulatory Disclosure">
                <p style={styles.paragraph}>
                  We may share information with the following parties when
                  legally required:
                </p>
                <BulletList
                  items={[
                    "Nigerian law enforcement agencies when legally required",
                    "Courts and judicial authorities in response to valid legal processes",
                    "Financial Intelligence Unit (NFIU) for anti-money laundering compliance",
                    "Central Bank of Nigeria (CBN) for financial services compliance",
                    "Nigeria Data Protection Commission when required by law",
                  ]}
                />
              </SubSection>

              <h3 style={{ ...styles.h3, color: "#2563eb" }}>
                3.4 Business Transfers
              </h3>
              <p style={{ ...styles.paragraph, color: styles.muted.color }}>
                In the event of a merger, acquisition, or sale of business
                assets, your information may be transferred to the new entity,
                subject to the same privacy protections outlined in this policy.
              </p>
            </SubSection>
          </SectionCard>

          <SectionCard title="4. Data Storage and Security" icon="🔒">
            <SubSection title="4.1 Data Storage">
              <BulletList
                items={[
                  "Data is stored on secure cloud servers located in Nigeria and other approved jurisdictions",
                  "Primary data storage utilizes Google Cloud Platform with Nigerian data residency compliance",
                  "Backup systems ensure data availability and disaster recovery",
                  "Data retention periods comply with Nigerian regulatory requirements",
                ]}
              />
            </SubSection>

            <SubSection title="4.2 Security Measures">
              <BulletList
                items={[
                  "Encryption: All data is encrypted in transit using TLS 1.3 and at rest using AES-256",
                  "Access Control: Multi-factor authentication and role-based access for all team members",
                  "Network Security: Firewalls, intrusion detection, and regular security monitoring",
                  "Regular Audits: Quarterly security assessments and penetration testing",
                  "Incident Response: 24/7 security monitoring and rapid incident response procedures",
                  "Employee Training: Regular security awareness training for all staff members",
                ]}
              />
            </SubSection>

            <SubSection title="4.3 KYC and Sensitive Data Protection">
              <p style={styles.paragraph}>
                We implement strict measures to secure sensitive information:
              </p>
              <BulletList
                items={[
                  "KYC documents are stored in encrypted, segregated systems with restricted access",
                  "Biometric data (if collected) is hashed and cannot be reverse-engineered",
                  "Payment information is tokenized and never stored in plain text",
                  "Regular deletion of unnecessary sensitive data in compliance with data minimization principles",
                ]}
              />
            </SubSection>

            <div
              style={{
                ...styles.callout,
                backgroundColor: "#e5f9f4",
                border: "1px solid #c5f1e6",
                color: "#059669",
              }}
            >
              <p style={{ ...styles.paragraph, margin: 0 }}>
                Security Commitment: While we implement industry-standard
                security measures, no method of transmission or storage is 100%
                secure. We continuously improve our security practices and will
                notify you promptly of any data breaches as required by law.
              </p>
            </div>
          </SectionCard>

          <SectionCard title="5. Your Privacy Rights" icon="🌍">
            <SubSection title="5.1 Access and Portability">
              <BulletList
                items={[
                  "Request a copy of all personal data we hold about you",
                  "Download your data in a machine-readable format (data portability)",
                  "View your data processing activities through your account dashboard",
                  "Access your transaction history and communication logs",
                ]}
              />
            </SubSection>

            <SubSection title="5.2 Deletion and Account Closure">
              <BulletList
                items={[
                  "Delete your account directly through the app settings",
                  "Request deletion of specific data categories",
                  "Permanent deletion of personal data (subject to legal retention requirements)",
                  "Retention of anonymized data for analytics and platform improvement",
                ]}
              />
            </SubSection>

            <SubSection title="5.3 Deletion and Account Closure">
              <p style={styles.paragraph}>
                You have control over your data and may request deletion at any
                time:
              </p>
              <BulletList
                items={[
                  "Delete your account directly through the app settings",
                  "Request deletion of specific data categories",
                  "Permanent deletion of personal data (subject to legal retention requirements)",
                  "Retention of anonymized data for analytics and platform improvement",
                ]}
              />
            </SubSection>

            <div
              style={{
                ...styles.callout,
                backgroundColor: "#fdf5e6",
                border: "1px solid #fcecd0",
                color: "#d97706",
              }}
            >
              <p style={{ ...styles.paragraph, margin: 0 }}>
                Note: Some data may be retained for legal compliance (e.g.,
                transaction records for tax purposes, KYC data for 5 years as
                required by CBN regulations). Deletion requests will be
                processed within 30 days.
              </p>
            </div>

            <SubSection title="5.4 Objection and Restriction">
              <p style={styles.paragraph}>
                You have rights to object or restrict how your data is
                processed:
              </p>
              <BulletList
                items={[
                  "Object to specific data processing activities",
                  "Restrict processing while disputes are resolved",
                  "Opt-out of marketing communications (while maintaining service-related messages)",
                  "Withdraw consent for optional data processing",
                ]}
              />
            </SubSection>

            <SubSection title="5.5 How to Exercise Your Rights">
              <BulletList
                items={[
                  "Through your account settings in the MyAgent app",
                  "Email us at privacy@myagent.ng with your request",
                  "Contact our Data Protection Officer at dpo@myagent.ng",
                  "Write to us at our registered office address",
                ]}
              />
              <p style={{ ...styles.paragraph, color: styles.muted.color }}>
                We will respond to all requests within 30 days and may request
                identity verification to protect your privacy.
              </p>
            </SubSection>
          </SectionCard>

          <SectionCard
            title="6. Children's Privacy Protection"
            icon="👶"
            iconColor="#dc2626"
          >
            <p style={{ ...styles.paragraph, color: styles.muted.color }}>
              MyAgent is intended exclusively for adults aged 18 years and
              above. Real estate transactions, financial services, and rental
              agreements require legal capacity that minors do not possess under
              Nigerian law.
            </p>
            <div
              style={{
                ...styles.callout,
                backgroundColor: "#fae7eb",
                border: "1px solid #f4c8d1",
                color: "#dc2626",
              }}
            >
              <BulletList
                items={[
                  "We do not knowingly collect personal information from anyone under 18 years of age",
                  "Our services require government-issued ID verification (18 only)",
                  "If we discover that a user is under 18, we will immediately terminate their account and delete their data",
                  "Parents or guardians who believe their child has provided information to us should contact us immediately",
                ]}
                textColor="#dc2626"
              />
            </div>
            <p style={{ ...styles.paragraph, color: styles.muted.color }}>
              If you are under 18, please do not use MyAgent or provide any
              personal information to us. Contact your parent or guardian if you
              need housing assistance.
            </p>
          </SectionCard>

          <SectionCard title="7. International Data Transfers" icon="🌐">
            <p style={styles.paragraph}>
              While we primarily process and store data within Nigeria, some
              service providers may be located in other countries with adequate
              data protection laws:
            </p>
            <BulletList
              items={[
                "Google Cloud Platform (with Nigerian data residency requirements)",
                "Amazon Web Services (AWS) for backup and disaster recovery",
                "Third-party verification services with international operations",
              ]}
            />
            <p style={{ ...styles.paragraph, color: styles.muted.color }}>
              All international transfers are protected by appropriate
              safeguards including Standard Contractual Clauses approved by the
              Nigeria Data Protection Commission and equivalent data protection
              standards.
            </p>
          </SectionCard>

          <SectionCard title="8. Policy Updates and Changes" icon="⏰">
            <p style={styles.paragraph}>
              We may update this Privacy Policy from time to time to reflect
              changes in our practices, technology, legal requirements, or other
              factors. When we make changes:
            </p>
            <BulletList
              items={[
                "We will notify you via email and in-app notification",
                "Significant changes will require your explicit consent",
                "The updated policy will be posted in the app with the revision date",
                "You will have 30 days to review changes before they take effect",
                "Continued use of the service after notification itutes acceptance",
              ]}
            />
            <p style={{ ...styles.paragraph, color: styles.muted.color }}>
              We recommend reviewing this policy periodically to stay informed
              about how we protect your information.
            </p>
          </SectionCard>

          <SectionCard title="9. Contact Information" icon="📄">
            <SubSection title="MyAgent Limited">
              <p style={styles.paragraph}>
                <strong>Registered Office: </strong>15 Adebola Street, Surulere,
                Lagos State, Nigeria
              </p>
              <p style={styles.paragraph}>
                <strong>Business Registration: </strong>RC 1234567 (Corporate
                Affairs Commission)
              </p>
              <p style={styles.paragraph}>
                <strong>Email: </strong>privacy@myagent.ng
              </p>
              <p style={styles.paragraph}>
                <strong>Data Protection Officer: </strong>dpo@myagent.ng
              </p>
              <p style={styles.paragraph}>
                <strong>Customer Support: </strong>support@myagent.ng
              </p>

              <h3 style={{ ...styles.h3, color: "#2563eb" }}>
                Data Protection Complaints
              </h3>
              <p style={{ ...styles.paragraph, color: styles.muted.color }}>
                If you have concerns about our data handling practices that we
                cannot resolve, you have the right to lodge a complaint with:
              </p>

              <div
                style={{
                  ...styles.callout,
                  backgroundColor: "#f9fafb",
                  border: "1px solid #f3f4f6",
                  color: styles.muted.color,
                }}
              >
                <h3 style={{ ...styles.h3, color: "#2563eb", marginTop: 0 }}>
                  Nigeria Data Protection Commission (NDPC)
                </h3>
                <p style={styles.paragraph}>Email: info@ndpc.gov.ng</p>
                <p style={styles.paragraph}>Website: www.ndpc.gov.ng</p>
                <p style={{ ...styles.paragraph, marginBottom: 0 }}>
                  Phone: 234 9 461 9368
                </p>
              </div>

              <div
                style={{
                  ...styles.callout,
                  backgroundColor: "#fcf9f3",
                  border: "1px solid #f5e7ce",
                  color: "#d97706",
                }}
              >
                <p style={{ ...styles.paragraph, margin: 0 }}>
                  Effective Date: This Privacy Policy is effective as of January
                  17, 2024, and was last updated on January 17, 2024. This
                  policy applies to all MyAgent users and supersedes all
                  previous versions.
                </p>
              </div>
            </SubSection>
          </SectionCard>

          <footer style={styles.footer}>
            <p style={{ ...styles.paragraph, margin: 0 }}>
              Thank you for trusting MyAgent with your personal information.
              <br />
              We are committed to protecting your privacy and providing you with
              transparent, secure services.
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
