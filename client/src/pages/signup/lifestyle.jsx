import React from "react";
import { lifestyleForm } from "../../actions/actions";
import { useState } from "react";
import { useDispatch } from "react-redux";

function LifeStyle() {
  const [smoke, setSmoke] = useState("");
  const [alcohol, setAlcohol] = useState("");
  const [sleep, setSleep] = useState("");
  const [diet, setDiet] = useState("");
  const [wellness, setWellness] = useState([]);

  const handwellness = (e) => {
    const { value, checked } = e.target;
    if(checked){
      setWellness((...Prev) =>  [...Prev, value])
    }
  }


    const dispatch = useDispatch();

     dispatch(lifestyleForm({
    smoke: smoke,
    alcohol: alcohol,
    sleep: sleep,
    diet: diet,
    wellness: wellness
  }));

  return (
    <div className="bg-blue-900 flex justify-center items-center h-screenover overflow-y-auto">
      <form className="bg-white h-255 w-130 flex flex-col gap-5">
        <div className="flex flex-col w-100 ml-5">
          <h1 className="text-5xl font-bold mb-4 ml-30 mt-7 bg-black- w-150">
            Life Style
          </h1>
          <label className="text-2xl w-150 font-bold pl-5">Do you Smoke?</label>

          <div className="ml-10 mt-3 flex items-center gap-2">
            <input
              type="radio"
              value="yes"
              id="smoked"
              name="smoking"
              checked={smoke === "yes"}
              onChange={(e) => setSmoke(e.target.value)}
              className="h-5 w-5"
            />
            <label htmlFor="smoked"> Yes </label>
          </div>

          <div className="ml-10 mt-3 flex items-center gap-2">
            <input
              type="radio"
              value="No"
              id="no-smoked"
              name="smoking"
              checked={smoke === "No"}
              onChange={(e) => setSmoke(e.target.value)}
              className="h-5 w-5"
            />
            <label htmlFor="no-smoked"> No </label>
          </div>
        </div>

        <div className="flex flex-col w-100 ml-5">
          <label className="text-2xl w-150 font-bold pl-5">
            Do you Consume Alcohol?
          </label>

          <div className="ml-10 mt-3 flex items-center gap-2">
            <input
              type="radio"
              value="yes"
              id="consumed"
              name="alcohol"
              checked={alcohol === "yes"}
              onChange={(e) => setAlcohol(e.target.value)}
              className="h-5 w-5"
            />
            <label htmlFor="consumed"> Yes </label>
          </div>

          <div className="ml-10 mt-3 flex items-center gap-2">
            <input
              type="radio"
              value="No"
              id="not-consumed"
              name="alcohol"
              checked={alcohol === "No"}
              onChange={(e) => setAlcohol(e.target.value)}
              className="h-5 w-5"
            />
            <label htmlFor="not-consumed"> No </label>
          </div>
        </div>

        <div className="flex flex-col w-100 ml-5">
          <label className="text-2xl w-110 font-bold pl-5">
            How many hours of sleep do you get per day on average?
          </label>

          <div className="ml-10 mt-3 flex items-center gap-2">
            <input
              type="radio"
              value="Less than 5"
              id="less"
              name="sleep"
              checked={sleep === "Less than 5"}
              onChange={(e) => setSleep(e.target.value)}
              className="h-5 w-5"
            />
            <label htmlFor="less"> Less than 5 </label>
          </div>

          <div className="ml-10 mt-3 flex items-center gap-2">
            <input
              type="radio"
              value="5-6"
              name="sleep"
              id="moderate"
              checked={sleep === "5-6"}
              onChange={(e) => setSleep(e.target.value)}
              className="h-5 w-5"
            />
            <label htmlFor="moderate"> 5-6 </label>
          </div>

          <div className="ml-10 mt-3 flex items-center gap-2">
            <input
              type="radio"
              value="7-8"
              name="sleep"
              id="balanced"
              checked={sleep === "7-8"}
              onChange={(e) => setSleep(e.target.value)}
              className="h-5 w-5"
            />
            <label htmlFor="balanced"> 7-8 </label>
          </div>

          <div className="ml-10 mt-3 flex items-center gap-2">
            <input
              type="radio"
              value="More than 8"
              name="sleep"
              id="healthy"
              checked={sleep === "More than 8"}
              onChange={(e) => setSleep(e.target.value)}
              className="h-5 w-5"
            />
            <label htmlFor="healthy"> More than 8 </label>
          </div>
        </div>

        <div className="flex flex-col w-100 ml-5">
          <label className="text-2xl w-110 font-bold pl-5">
            How would you describe your diet?
          </label>

          <div className="ml-10 mt-3 flex items-center gap-2">
            <input
              type="radio"
              value="Balanced"
              id="balanced"
              name="diet"
              checked={diet === "Balanced"}
              onChange={(e) => setDiet(e.target.value)}
              className="h-5 w-5"
            />
            <label htmlFor="balanced"> Balanced</label>
          </div>

          <div className="ml-10 mt-3 flex items-center gap-2">
            <input
              type="radio"
              value="Vegetarian"
              id="vegetarian"
              name="diet"
              checked={diet === "Vegetarian"}
              onChange={(e) => setDiet(e.target.value)}
              className="h-5 w-5"
            />
            <label htmlFor="vegetarian"> Vegetarian </label>
          </div>

          <div className="ml-10 mt-3 flex items-center gap-2">
            <input
              type="radio"
              value="High in processed or fast foods"
              id="fast-foods"
              name="diet"
              checked={diet === "High in processed or fast foods"}
              onChange={(e) => setDiet(e.target.value)}
              className="h-5 w-5"
            />
            <label htmlFor="fast-foods">
              {" "}
              High in processed or fast foods{" "}
            </label>
          </div>

          <div className="ml-10 mt-3 flex items-center gap-2">
            <input
              type="radio"
              value="Irregular / Skipped meals"
              id="irregular"
              name="diet"
              checked={diet === "Irregular / Skipped meals"}
              onChange={(e) => setDiet(e.target.value)}
              className="h-5 w-5"
            />
            <label htmlFor="irregular"> Irregular / Skipped meals </label>
          </div>
        </div>

        <div className="flex flex-col w-100 ml-5">
          <label className="text-2xl w-110 font-bold pl-5">
            Which of the following wellness practices do you regularly engage
            in?
          </label>

          <div className="ml-10 mt-3 flex items-center gap-2">
            <input
              type="checkbox"
              name="wellness"
              value="Regular Exercise"
              id="exercise"
              onChange={handwellness}
              className="h-5 w-5"
            />
            <label htmlFor="exercise"> Regular Exercise </label>
          </div>

          <div className="ml-10 mt-3 flex items-center gap-2">
            <input
              type="checkbox"
              name="wellness"
              value="Meditation / Mindfulness"
              id="meditation"
              onChange={handwellness}
              className="h-5 w-5"
            />
            <label htmlFor="meditation"> Meditation / Mindfulness </label>
          </div>

          <div className="ml-10 mt-3 flex items-center gap-2">
            <input
              type="checkbox"
              name="wellness"
              value="Routine medical checkups"
              id="checkups"
              onChange={handwellness}
              className="h-5 w-5"
            />
            <label htmlFor="checkups"> Routine medical checkups </label>
          </div>

          <div className="ml-10 mt-3 flex items-center gap-2">
            <input
              type="checkbox"
              name="wellness"
              value="Staying hydrated"
              id="hydrated"
              onChange={handwellness}
              className="h-5 w-5"
            />
            <label htmlFor="hydrated"> Staying hydrated </label>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LifeStyle;
