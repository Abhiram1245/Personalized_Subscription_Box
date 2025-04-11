import React from "react";

const HowItWorks = () => {
  const styles = {
    // Background
    background: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100vh",
      background: "linear-gradient(to right, #f0f2f5, #d9e2ec)",
      zIndex: -1,
    },

    // Container Card
    container: {
      maxWidth: "1200px",
      margin: "150px auto",
      padding: "40px",
      backgroundColor: "white",
      borderRadius: "10px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      position: "relative",
      zIndex: 1,
      textAlign: "center",
      fontFamily: "'Arial', sans-serif",
    },

    // Heading
    heading: {
      color: "#001f3f", // Navy blue
      fontSize: "32px",
      fontWeight: "bold",
      marginBottom: "10px",
    },

    // Subheading
    subheading: {
      color: "#000",
      fontWeight: "bold",
      fontSize: "18px",
      marginBottom: "30px",
    },

    // Step container
    stepsContainer: {
      display: "flex",
      justifyContent: "center",
      gap: "40px",
      flexWrap: "wrap",
      marginTop: "30px",
    },

    // Each step
    stepBox: {
      textAlign: "center",
      maxWidth: "280px",
    },

    // Final message
    finalMessage: {
      marginTop: "50px",
    },

    finalHeading: {
      color: "#001f3f",
      fontWeight: "bold",
    },

    finalText: {
      color: "#000",
      fontWeight: "bold",
      fontSize: "16px",
    },
  };

  return (
    <div style={styles.background}>
      <div style={styles.container}>
        <h2 style={styles.heading}>HOW IT WORKS</h2>
        <p style={styles.subheading}>Your journey to personalized unboxing starts here!</p>

        <div style={styles.stepsContainer}>
          {/* Step 1 */}
          <div style={styles.stepBox}>
            <h3 style={{ fontSize: "36px", margin: "0", color: "#001f3f", fontWeight: "bold" }}>
              1️⃣
            </h3>
            <p>
              <strong style={{ color: "#000" }}>Login or Create an Account</strong>
              <br />
              Secure your personalized experience by logging in or signing up.
            </p>
          </div>

          <div style={{ fontSize: "28px", alignSelf: "center", color: "#001f3f" }}></div>

          {/* Step 2 */}
          <div style={styles.stepBox}>
            <h3 style={{ fontSize: "36px", margin: "0", color: "#001f3f", fontWeight: "bold" }}>
              2️⃣
            </h3>
            <p>
              <strong style={{ color: "#000" }}>Add to Cart or Subscribe Directly</strong>
              <br />
              Choose your favorite items or go straight for the surprise box!
            </p>
          </div>

          <div style={{ fontSize: "28px", alignSelf: "center", color: "#001f3f" }}></div>

          {/* Step 3 */}
          <div style={styles.stepBox}>
            <h3 style={{ fontSize: "36px", margin: "0", color: "#001f3f", fontWeight: "bold" }}>
              3️⃣
            </h3>
            <p>
              <strong style={{ color: "#000" }}>Choose a Plan</strong>
              <br />
              Select from daily, monthly, or yearly plans — flexible & budget-friendly!
            </p>
          </div>
        </div>

        {/* Final Call to Action */}
        <div style={styles.finalMessage}>
          <h3 style={styles.finalHeading}> Unbox joy, your way — on your schedule!</h3>
          <p style={styles.finalText}>Customize ,Subscribe ,Enjoy!!!</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
