import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { useContext } from "../context/ContextProvider";

const Attraction = () => {
  const [attraction, setAttraction] = useState(null);
  const { context } = useContext();
  const params = useParams();

  useEffect(() => {
    const currentAttraction = context.attractions.find(
      (attraction) => attraction.id === +params.attractionId
    );
    if (currentAttraction) setAttraction(currentAttraction);
  }, []);

  return (
    <Layout
      banner={
        <div className="absolute top-0 left-0 w-full bg-[#7B4F94] h-24" />
      }
    >
      <h1 className="w-full h-24 text-white flex items-center font-medium text-3xl">
        {attraction?.name}
      </h1>
      <div className="flex justify-center my-10">
        <img
          className="max-h-[500px]"
          src={attraction?.image}
          alt={attraction?.name}
        />
      </div>
      <div className="mb-10">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          tincidunt faucibus velit vitae commodo. Duis ullamcorper felis
          bibendum, mattis est posuere, tempus leo. Integer suscipit justo nec
          varius aliquam. Etiam sed urna lorem. Sed metus neque, scelerisque at
          dictum et, pulvinar eu velit. In hac habitasse platea dictumst. Donec
          elementum fringilla finibus.
        </p>
        <p>
          Nullam convallis sodales nisl id fermentum. Sed semper, mi non auctor
          fringilla, neque leo ultricies dolor, ut tempus ligula magna id elit.
          Vivamus vestibulum nec quam non malesuada. Vestibulum blandit pharetra
          venenatis. Donec porttitor risus ut urna tristique pulvinar. Nullam
          finibus metus elit, non posuere augue placerat non. Duis gravida
          efficitur interdum. Duis sit amet velit felis. Fusce ex lectus,
          commodo vel ex non, egestas tincidunt metus. Donec vitae dictum purus.
          Integer ac risus purus.
        </p>
        <p>
          Vestibulum imperdiet erat quis consectetur pulvinar. Vestibulum
          dignissim leo at eros ultrices, et fermentum ligula vestibulum. In
          convallis vehicula neque eu volutpat. Pellentesque a pulvinar arcu.
          Vivamus gravida elementum libero ac dapibus. Fusce nunc felis,
          interdum eget lacinia eu, dignissim at augue. Phasellus in orci nec
          ante maximus pharetra. Duis vel blandit sapien, et faucibus turpis.
          Phasellus at sapien et neque venenatis vestibulum. Vivamus pulvinar,
          lorem sit amet tincidunt pharetra, ipsum neque venenatis quam, mollis
          volutpat elit arcu ut eros. Phasellus pretium tellus leo, pellentesque
          vestibulum erat feugiat sit amet. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>
      </div>
    </Layout>
  );
};

export default Attraction;
