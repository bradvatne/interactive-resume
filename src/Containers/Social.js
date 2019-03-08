import React from "react";
import content from "../content";

const Social = () => {
  const { social } = content;
  const { email, linkedin, github, youtube } = social;
  const socials = [email, linkedin, github, youtube];

  return (
    <div className="fadeIn">
      <hr />
      <div className="contact-boxes">
        {socials.map(social => (
          <a href={social.url}>
            <i class={social.class} />
          </a>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default Social;
