export default function TermsPage() {
  return (
    <main style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Terms of Service</h1>
      <p>Last updated: {new Date().toLocaleDateString()}</p>

      <section>
        <h2>1. Introduction</h2>
        <p>
          These Terms of Service govern your use of the Nomadia Travels website
          and services. By accessing our platform, you agree to these terms.
        </p>
      </section>

      <section>
        <h2>2. Use of Services</h2>
        <p>
          You may use our services only in compliance with applicable laws. Any
          misuse, including fraudulent bookings or unauthorized access, is
          strictly prohibited.
        </p>
      </section>

      <section>
        <h2>3. Liability</h2>
        <p>
          Nomadia Travels is not responsible for indirect damages. Our liability
          is limited to the maximum extent permitted by law.
        </p>
      </section>
    </main>
  );
}
