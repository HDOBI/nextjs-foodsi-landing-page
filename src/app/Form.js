"use client";
import { useState } from "react";

export default function Form() {
  const [username, setUsername] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: username }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        placeholder="Enter your username"
        className="text-black"
      />
      <button type="submit">Send</button>
    </form>
  );
}
