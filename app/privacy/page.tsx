export default function PrivacyPage() {
  return (
    <main style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Privacy Policy</h1>
      <p>Last updated: {new Date().toLocaleDateString()}</p>

      <section>
        <h2>1. Information We Collect</h2>
        <p>
          We collect personal information you provide directly, such as your
          email when subscribing to our newsletter or booking a trip.
        </p>
      </section>

      <section>
        <h2>2. How We Use Your Information</h2>
        <p>
          We use the collected data to provide and improve our services, send
          updates, and ensure booking safety.
        </p>
      </section>

      <section>
        <h2>3. Data Protection</h2>
        <p>
          Your data is stored securely and not shared with third parties except
          as required by law.
        </p>
      </section>
    </main>
  );
}
