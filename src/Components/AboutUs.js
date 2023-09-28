import React, { useState } from "react";

export default function AboutUs() {
  const [MyStyle, setMyStyle] = useState({
    backgroundColor: "white",
    color: "black",
  });

  const [btnText, setbtnText] = useState("Enable Dark Mode");

  const toggleAct = () => {
    if (MyStyle.backgroundColor === "white") {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setbtnText("Enable Light Mode");
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setbtnText("Enable Dark Mode");
    }
  };

  return (
    <div className="container my-5" style={MyStyle}>
      <h2 className="text-center">About Us</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum quo
        alias corrupti eos reiciendis commodi doloribus quam deserunt
        architecto, veritatis obcaecati hic beatae nesciunt magnam minus odit
        aliquid eum magni consequatur consequuntur voluptas voluptatum. Illum,
        impedit quos necessitatibus labore doloribus eum ut assumenda nemo
        dignissimos id iusto perspiciatis repellendus autem accusamus ipsam nam
        praesentium? Architecto tempore iste laudantium incidunt, consequuntur
        eum assumenda maxime. At, cum? Necessitatibus quasi eius aliquam
        distinctio fuga, eveniet animi natus at ex ullam consequuntur neque. Rem
        qui non alias ut aspernatur aliquid et, doloremque iusto similique,
        illum maiores atque officiis eum optio omnis consectetur dolorem fugit
        quod laudantium error porro harum mollitia? Illo iste nemo nesciunt
        fugiat voluptatibus cupiditate quas doloremque ipsum molestiae! Quod
        ipsam consequuntur minus error, labore esse, eaque deserunt enim earum
        ducimus, magni blanditiis iure quidem animi sunt omnis! Aut velit
        suscipit, impedit quos beatae minima voluptate consectetur alias
        praesentium enim facere distinctio nostrum officiis sapiente, est amet
        eaque. Maxime illum harum voluptates fugit aut enim, vel in deleniti
        culpa? Odit voluptates necessitatibus corporis atque reprehenderit
        eveniet! Temporibus, facilis! Nobis ea magni, alias corrupti dignissimos
        ullam at iste cumque ut libero officia? Error, sunt. Explicabo
        accusantium quisquam excepturi numquam? Itaque saepe, dolorem tempora
        nostrum rerum quo! Quibusdam ducimus dolore veniam voluptas quas iusto
        sit neque. Quasi ab asperiores voluptas dolore aut optio eius ipsa
        blanditiis obcaecati voluptatum id fugiat est illum autem assumenda
        quaerat delectus aspernatur, repudiandae commodi, culpa porro
        architecto. Adipisci ratione architecto reiciendis incidunt consectetur
        cupiditate reprehenderit ex nemo vero dolorum distinctio temporibus
        aliquid, repudiandae quos dolore corporis nulla. Tempore praesentium hic
        eveniet rem enim vitae suscipit, optio, quis, necessitatibus error
        accusantium animi? Tempora soluta ullam nesciunt illo iusto odio in
        consequuntur repellat, labore ducimus magni culpa non vero quam beatae
        dolore explicabo facilis atque odit hic! Minus delectus nostrum ipsa,
        adipisci pariatur numquam quia vitae sapiente impedit earum consequuntur
        ducimus necessitatibus placeat voluptatem reprehenderit ullam cum et
        eveniet accusamus? Eius qui, consequuntur nemo magni, nulla ut excepturi
        reiciendis iste minima eos, expedita harum vero accusantium aut aliquid
        dolor dicta quod magnam veritatis molestiae reprehenderit. Cum nobis
        iste esse. Maxime, facere eaque enim corporis sit quam debitis modi
        autem asperiores iste ipsum facilis quidem illo at quis placeat voluptas
        optio adipisci cumque repellendus ut officiis nostrum? Vel non labore
        omnis soluta quas! Repellat mollitia temporibus ullam odio. Ab pariatur
        nesciunt fuga itaque non corporis omnis quaerat tempore voluptatum
        maiores! Autem est pariatur eum reiciendis eveniet quibusdam molestiae
      </p>
      <button className="btn btn-primary" onClick={toggleAct}>
        {btnText}
      </button>
    </div>
  );
}
