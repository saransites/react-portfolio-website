import React, { useState } from "react";
import { useSprings, animated, to as interpolate } from "@react-spring/web";
import { useDrag } from "react-use-gesture";
import html from "/html.png";
import Css from "/css.png";
import javascript from "/javascript.png";
import react from "/react.png";
import mongo from "/mongo-db.png";
import node from "/nodejs.png";
import "../module.css";

const cards = [
  {
    title: "MongoDB",
    image: mongo,
  },
  {
    title: "nodeJs",
    image: node,
  },
  {
    title: "React",
    image: react,
  },
  {
    title: "JavaScript",
    image: javascript,
  },
  {
    title: "CSS",
    image: Css,
  },
  {
    title: "HTML",
    image: html,
  },
];

const to = (i) => ({
  x: 10,
  y: i * -4,
  scale: 1,
  // rot: -10 + Math.random() * 20,
  rot: 10.4,
  delay: i * 100,
});
const from = (_i) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });
const trans = (r, s) =>
  `perspective(1500px) rotateX(30deg) rotateY(${
    r / 10
  }deg) rotateZ(${r}deg) scale(${s})`;

const Deck = () => {
  const [gone] = useState(() => new Set());
  const [props, api] = useSprings(cards.length, (i) => ({
    ...to(i),
    from: from(i),
  }));

  const bind = useDrag(
    ({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
      const trigger = velocity > 0.2;
      const dir = xDir < 0 ? -1 : 1;
      if (!down && trigger) gone.add(index);
      api.start((i) => {
        if (index !== i) return;
        const isGone = gone.has(index);
        const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0;
        const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0);
        const scale = down ? 1.1 : 1;
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 250, tension: down ? 800 : isGone ? 200 : 500 },
        };
      });
      if (gone.size === cards.length)
        setTimeout(() => {
          gone.clear();
          api.start((i) => to(i));
        }, 600);
    }
  );

  return (
    <>
      <h1
        className={`mb-16 ml-8 border-b-2 w-fit border-white text-white text-[length:var(--head--size)] font-semibold `}
      >
        Skills
      </h1>
      <div>
        {props.map(({ x, y, rot, scale }, i) => (
          <animated.div className="deck" key={i} style={{ x, y }}>
            <animated.div
              {...bind(i)}
              style={{
                transform: interpolate([rot, scale], trans),
                backgroundColor: "gray",
                boxShadow: "0 0 20px black",
              }}
              className="flex flex-col items-center"
            >
              <h1 className="text-center text-[#000000] py-2 font-bold">
                {cards[i].title}
              </h1>
              <img
                src={cards[i].image}
                className="flex-grow object-cover"
                alt="loading..."
              />
            </animated.div>
          </animated.div>
        ))}
      </div>
    </>
  );
};

const Skills = () => {
  return (
    <div className="w-3/4">
      <Deck />
      <p className="text-white text-justify tracking-widest  text-[0.5rem] md:text-[0.8rem] w-[75%] md:w-[65%] lg:w-[65%] ml-4 transform translate-y-[16rem] leading-5">
        With proficiency in full-stack web development, I excel in both frontend
        and backend technologies. From creating engaging user interfaces with
        HTML, CSS, and JavaScript frameworks like React, to architecting
        scalable server-side applications using Node.js, Express, and databases
        like MongoDB, I ensure end-to-end excellence in web development
        projects.
      </p>
    </div>
  );
};

export default Skills;
