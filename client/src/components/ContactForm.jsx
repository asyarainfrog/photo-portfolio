import React, { useState, useEffect } from "react";
import { supabase } from "../supabase";

export default function ContactForm() {
  const [availableDates, setAvailableDates] = useState([]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    shooting_date: "",
    message: "",
  });

  useEffect(() => {
    loadDates();
  }, []);

  const loadDates = async () => {
    const { data, error } = await supabase
      .from("available_dates")
      .select("*")
      .order("date");

    if (error) {
      console.error(error);
      return;
    }

    setAvailableDates(data);
  };

  const send = async (e) => {
    e.preventDefault();

    const { error } = await supabase
      .from("bookings")
      .insert([form]);

    if (error) {
      console.error(error);
      alert("Error sending request");
      return;
    }

    alert("Booking request sent!");

    setForm({
      name: "",
      email: "",
      shooting_date: "",
      message: "",
    });
  };

  return (
    <form className="booking-form" onSubmit={send}>
      <input
        placeholder="Your name"
        value={form.name}
        onChange={(e) =>
          setForm({
            ...form,
            name: e.target.value,
          })
        }
      />

      <input
        type="email"
        placeholder="Your email"
        value={form.email}
        onChange={(e) =>
          setForm({
            ...form,
            email: e.target.value,
          })
        }
      />

      <select
        value={form.shooting_date}
        onChange={(e) =>
          setForm({
            ...form,
            shooting_date: e.target.value,
          })
        }
      >
        <option value="">
          Select available date
        </option>

        {availableDates.map((date) => (
          <option
            key={date.id}
            value={date.date}
          >
            {date.date}
          </option>
        ))}
      </select>

      <textarea
        placeholder="Tell me about your photoshoot"
        value={form.message}
        onChange={(e) =>
          setForm({
            ...form,
            message: e.target.value,
          })
        }
      />

      <button type="submit">
        Book a Photoshoot
      </button>
    </form>
  );
}

const loadDates = async () => {
  const { data, error } = await supabase
    .from("available_dates")
    .select("*")
    .order("date");

  console.log("DATA:", data);
  console.log("ERROR:", error);

  if (error) {
    console.error(error);
    return;
  }

  setAvailableDates(data);
};