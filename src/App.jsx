import { useState } from 'react'
import './App.css'

function App() {
    // סטייט לכל שדה
    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [city, setCity] = useState("");

    // לפי דרך 2:
    // אם לא היינו רוצים להשתמש בסטייט עבור השדות אלא ישר לאתחל עם הערכים שהוכנסו באינפוטים:
    //     const username = document.getElementById("username").value;
    //     const firstName = document.getElementById("firstName").value;
    //     const lastName = document.getElementById("lastName").value;
    //     const phone = document.getElementById("phone").value;
    //     const email = document.getElementById("email").value;
    //     const city = document.getElementById("city").value;
    // ואז היינו מוסיפים לכל אינפוט id ולא היה צריך לעדכן את הסטייט.

    // הערה חשובה:
    // אם אני אעשה בדרך שהצעת את התרגיל מבלי להשתמש בסטייט זה אומר שאני לא אוכל לעדכן את הערכים בתוך האינפוטים

    // הפונקציה שטטפל בהצגת השגיאות:
    const handleSubmit = () => {
        // בדיקה לכל שדה אם לא הוכנס ערך:

        // חשוב!!! בגאווה סקריפט אפשר להשתמש בבוליאן על טייפים אחרים.
        // ערכים שייתנו false הם:  0 (int) , "" (string) , null (כל הטייפים).
        if (!username) { // כלומר: if username = "" (false)
            alert("Enter a username.");
            return; // כדי שהקוד לא ימשיך לרוץ אם הערך הזה לא הוכנס
            // בכללי אסור לעשות ריטרן בתוך קומפוננטה פונקציה אלא אם הוא ריק רק כדי לשבור את הלואה או התנאי ולצאת מהפונקציה!
            // אם היינו עושים פה return (....) ומנסים להחזיר משהו - ריאקט הייתה מתעלמת מזה כי ריאקט מציירת/מפעילה רק מה שחוזר מהריטרן של הקומפוננטה עצמה.
        }
        if (!firstName) {
            alert("Enter a first name.");
            return;
        }
        if (!lastName) {
            alert("Enter a last name.");
            return;
        }
        if (!phone) {
            alert("Enter a phone number.");
            return;
        }
        if (!email) {
            alert("Enter an email address.");
            return;
        }
        if (!city) {
            alert("Enter a city.");
            return;
        }
        // אם הגיע לפה זה אומר שמילא את כל השדות:
        alert("You have submitted successfully!");

        // הדפסה בקונסולה בinspect בדפדפן אחרי שהכניס הכל:
        console.log("Username:", username);
        console.log("First Name:", firstName);
        console.log("Last Name:", lastName);
        console.log("Phone Number:", phone);
        console.log("Email Address:", email);
        console.log("City:", city);


        // בכללי היה אפשר לכתוב את זה גם ככה:
        //     if (!username) alert("יש להכניס שם משתמש");
        //     else if (!firstName) alert("יש להכניס שם פרטי");
        //     else if (!lastName) alert("יש להכניס שם משפחה");
        //     else if (!phone) alert("יש להכניס מספר פלאפון");
        //     else if (!email) alert("יש להכניס כתובת מייל");
        //     else if (!city) alert("יש להכניס עיר מגורים");
        //     else {
        //       // אם הכל מלא
        //       alert("נרשמת בהצלחה");
        //       console.log("פרטי המשתמש:");
        //       console.log("שם משתמש:", username);
        //       console.log("שם פרטי:", firstName);
        //       console.log("שם משפחה:", lastName);
        //       console.log("מספר פלאפון:", phone);
        //       console.log("כתובת מייל:", email);
        //       console.log("עיר מגורים:", city);
        //     }

    }; //handleSubmit

  return (
      <div>
          <h2>Submission Form</h2>
          <br />
          {/* האינפוטים יחד עם ערך שמתעדכן בהתאם לסטייט של אותה שדה באינפוט: */}
          <input placeholder="Username:" value={username} onChange={(e) => setUsername(e.target.value)} />
          <br />
          <input placeholder="First Name: " value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          <br />
          <input placeholder="Last Name: " value={lastName} onChange={(e) => setLastName(e.target.value)} />
          <br />
          <input placeholder="Phone Number: " value={phone} onChange={(e) => setPhone(e.target.value)} />
          <br />
          <input placeholder="Email Address: " value={email} onChange={(e) => setEmail(e.target.value)} />
          <br />
          <input placeholder="City: " value={city} onChange={(e) => setCity(e.target.value)} />
          <br />

          {/*  לפי דרך 2 (בלי סטייטים לשדות):
               <input id="username" placeholder="שם משתמש" />
               <input id="firstName" placeholder="שם פרטי" />
               <input id="lastName" placeholder="שם משפחה" />
               <input id="phone" placeholder="מספר פלאפון" />
               <input id="email" placeholder="כתובת מייל" />
               <input id="city" placeholder="עיר מגורים" /> */}

          <button onClick={handleSubmit}>Submit</button>
      </div>
  )
}

export default App
