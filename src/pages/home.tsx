import IconAdd from "../assets/add";
import IconDots from "../assets/dots";
import profileImageUrl from "../assets/profile-img.jpg";
import Button from "../components/button";
import Tag from "../components/tag";
import croatiaFlagUrl from "../assets/croatia.png";
import IconArrowTopRight from "../assets/arrow-top-right";

type ProfileDataType = {
  firstName: string;
  lastName: string;
  profileDescription: string;
  skills: string[];
  country: string;
  city: string;
  experience: string;
  links: {
    [name: string]: string;
  };
  email: string;
};

const data1: ProfileDataType = {
  firstName: "Ivan",
  lastName: "Antunović",
  country: "Croatia",
  city: "Osijek",
  profileDescription: "I'm a frontend developer based in Osijek.",
  skills: ["HTML", "CSS/SASS", "JS/TS", "React", "Fusion360"],
  experience:
    "I'm a frontend developer and 3D designer passionate about experiences for web applications. I also enjoy doing 3D design and 3D printing. This site is an example of a web app made by me from scratch. Some of my 3D projects are listed down below ",
  links: {
    github: "https://github.com/ivan110501",
    instagram: "https://www.instagram.com/ivan.antunovic3/",
    linkedIn: "https://www.linkedin.com/in/ivan-antunović-895a872b8/",
  },
  email: "ivan.antunovic292@gmail.com",
};

const Home = () => {
  return (
    <>
      <div className="personal">
        <div className="personal__top"></div>
        <div className="personal__header">
          <div className="personal__header__img">
            <img src={profileImageUrl} alt="profile image" />
          </div>
          <div className="personal__header__info">
            <div className="personal__header__name">
              {data1.firstName} {data1.lastName}
            </div>
            <div className="personal__header__description">
              {data1.profileDescription}
            </div>
          </div>
          <div className="personal__header__actions">
            <Button color="blue">
              <IconDots />
            </Button>
            <Button color="blue">Hire me</Button>
            <Button color="blue" leftElement={<IconAdd />}>
              Follow
            </Button>
          </div>
        </div>
        <div className="personal__body">
          <div className="personal__body__pannel personal__body__main">
            <h2 className="personal__body__title">About me</h2>
            <p className="personal__body__p mb-8">{data1.experience}</p>

            <div>
              <h3>Projects</h3>

              <div style={{ display: "flex", marginTop: "10%" }}>
                <img
                  style={{ width: "50%" }}
                  src="https://www.upwork.com/att/download/portfolio/persons/uid/1652076715133968384/profile/projects/files/a89524f9-7e32-43d9-a7ee-7f6cdbaacced"
                  alt=""
                />
                <img
                  style={{ width: "50%" }}
                  src="https://www.upwork.com/att/download/portfolio/persons/uid/1652076715133968384/profile/projects/files/d5ae96b6-1a9a-4814-9092-4fbf55142b8a"
                  alt=""
                />
              </div>
            </div>

            <div style={{ height: "5rem" }}>
              <img style={{ width: "8rem" }} alt="" />
            </div>
          </div>
          <div className="personal__body__pannel personal__body__side">
            <h3 className="personal__body__subtitle mb-2">Skills</h3>
            <div className="mb-8 tag__wrapper tag__wrapper--left">
              {data1.skills.map((skill) => {
                return (
                  <Tag key={skill} size="sm">
                    {skill}
                  </Tag>
                );
              })}
            </div>
            <h3 className="personal__body__subtitle mb-2">Location</h3>
            <div className="flex flex--ac mb-8">
              <img
                width={24}
                className="display--block mr-2"
                src={croatiaFlagUrl}
                alt="Flag of Croatia"
              />
              <span>
                {data1.city}, {data1.country}
              </span>
            </div>
            <h3 className="personal__body__subtitle mb-2">Links</h3>
            <div className="mb-8">
              {Object.keys(data1.links).map((key) => {
                return (
                  <>
                    <a
                      className="link link--icon"
                      href={data1.links[key]}
                      key={key}
                      target="_blank"
                    >
                      <IconArrowTopRight width={16} />
                      {key}
                    </a>
                  </>
                );
              })}
            </div>
            <h3 className="personal__body__subtitle mb-2">Email</h3>
            <div>{data1.email}</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
