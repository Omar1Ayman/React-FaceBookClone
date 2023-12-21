import OnlneFriends from "./OnlneFriends";

const HomeRightBar = () => {
  return (
    <>
      <div className="advs">
        <div className="top">
          <img className="gift" src="/assets/gift.png" alt="" />
          <p>
            <strong>Pola Foster</strong> and <strong>3 other friends</strong>{" "}
            have a birthday today
          </p>
        </div>
        <div className="center">
          <img className="ad-img" src="/assets/ad.png" alt="ad" />
        </div>
      </div>
      <OnlneFriends />
    </>
  );
};

export default HomeRightBar;
