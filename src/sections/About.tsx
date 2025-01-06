import headshot from "@/assets/images/headshot2.jpg";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="
        mx-10 flex items-center justify-center gap-24
        bg-white/10 backdrop-blur-md
        border border-white/20
        rounded-3xl p-8 py-20
      "
    >
      <div className="flex flex-col gap-8 w-1/2">
        <h2 className="font-serif text-5xl">About Me</h2>
        <p>
          My name is Jayanth Peetla, a fourth-year Computer Science student at
          the University of Virginia. I'm passionate about building software to
          tackle challenging real-world problems. I'm an experienced full-stack
          developer using a variety of different tech stacks.
        </p>
      </div>
      <div>
        <img
          src={headshot.src}
          alt="Jayanth Peetla"
          className="rounded-3xl h-80 w-70"
        />
      </div>
    </section>
  );
};
