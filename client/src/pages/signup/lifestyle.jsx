import React from "react";

function LifeStyle() {
  return (
    <div className="bg-blue-900 flex justify-center items-center h-screenover overflow-y-auto">
      <form className="bg-white h-255 w-130 flex flex-col gap-5">
        <div className="flex flex-col w-100 ml-5">
          <h1 className="text-5xl font-bold mb-4 ml-30 mt-7 bg-black- w-150">
            Life Style
          </h1>
          <label className="text-2xl w-150 font-bold pl-5">Do you Smoke?</label>

          <div className="ml-10 mt-3 flex items-center gap-2">
            <input type="radio" value="yes" id = "smoked" name = "smoking" className="h-5 w-5" />
            <label htmlFor="smoked"> Yes </label>
          </div>

          <div className="ml-10 mt-3 flex items-center gap-2">
            <input type="radio" value="yes" id = "no-smoked" name = "smoking" className="h-5 w-5" />
            <label htmlFor="no-smoked"> No </label>
          </div>
        </div>

         <div className="flex flex-col w-100 ml-5">
          <label className="text-2xl w-150 font-bold pl-5">Do you Consume Alcohol?</label>

          <div className="ml-10 mt-3 flex items-center gap-2">
            <input type="radio" value="yes" id = "consumed" name = "alcohol" className="h-5 w-5" />
            <label htmlFor="consumed"> Yes </label>
          </div>

          <div className="ml-10 mt-3 flex items-center gap-2">
            <input type="radio" value="yes" id = "not-consumed" name = "alcohol" className="h-5 w-5" />
            <label htmlFor="not-consumed"> No </label>
          </div>
        </div>


         <div className="flex flex-col w-100 ml-5">
          <label className="text-2xl w-110 font-bold pl-5">How many hours of sleep do you get per day on average?</label>

          <div className="ml-10 mt-3 flex items-center gap-2">
            <input type="radio" value="yes" id = "less" name = "sleep" className="h-5 w-5" />
            <label htmlFor = "less"> Less than 5 </label>
          </div>

          <div className="ml-10 mt-3 flex items-center gap-2">
            <input type="radio" value="yes" name = "sleep" id = "moderate" className="h-5 w-5" />
            <label htmlFor="moderate"> 5-6 </label>
          </div>

           <div className="ml-10 mt-3 flex items-center gap-2">
            <input type="radio" value="yes" name = "sleep"  id = "balanced" className="h-5 w-5" />
            <label htmlFor = "balanced"> 7-8 </label>
          </div>

           <div className="ml-10 mt-3 flex items-center gap-2">
            <input type="radio" value="yes" name = "sleep"  id = "healthy" className="h-5 w-5" />
            <label htmlFor = "healthy" > More than 8 </label>
          </div>
        </div>


        <div className="flex flex-col w-100 ml-5">
          <label className="text-2xl w-110 font-bold pl-5">How would you describe your diet?</label>

          <div className="ml-10 mt-3 flex items-center gap-2">
            <input type="radio" value="yes" id = "balanced" name = "diet" className="h-5 w-5" />
            <label htmlFor = "balanced"> Balanced </label>
          </div>

          <div className="ml-10 mt-3 flex items-center gap-2">
            <input type="radio" value="yes" id = "vegetarian" name = "diet" className="h-5 w-5" />
            <label htmlFor = "vegetarian"> Vegetarian </label>
          </div>

           <div className="ml-10 mt-3 flex items-center gap-2">
            <input type="radio" value="yes" id = "fast-foods" name = "diet" className="h-5 w-5" />
            <label htmlFor="fast-foods"> High in processed or fast foods </label>
          </div>

           <div className="ml-10 mt-3 flex items-center gap-2">
            <input type="radio" value="yes" id = "irregular" name = "diet" className="h-5 w-5" />
            <label htmlFor ="irregular" > Irregular / Skipped meals </label>
          </div>
        </div>


          <div className="flex flex-col w-100 ml-5">
          <label className="text-2xl w-110 font-bold pl-5">Which of the following wellness practices do you regularly engage in?</label>

          <div className="ml-10 mt-3 flex items-center gap-2">
            <input type="checkbox" name="wellness" id = "exercise" className="h-5 w-5" />
            <label htmlFor = "exercise"> Regular Exercise </label>
          </div>

          <div className="ml-10 mt-3 flex items-center gap-2">
            <input type="checkbox"  name="wellness" id = "meditation" className="h-5 w-5" />
            <label htmlFor = "meditation"> Meditation / Mindfulness </label>
          </div>

           <div className="ml-10 mt-3 flex items-center gap-2">
            <input type="checkbox"  name="wellness" id = "checkups" className="h-5 w-5" />
            <label htmlFor = "checkups"> Routine medical checkups </label>
          </div>

           <div className="ml-10 mt-3 flex items-center gap-2">
            <input type="checkbox"  name="wellness" id = "hydrated" className="h-5 w-5" />
            <label htmlFor = "hydrated"> Staying hydrated </label>
          </div>
        </div>

       

        
      </form>
    </div>
  );
}

export default LifeStyle;
