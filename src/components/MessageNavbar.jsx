import { useState, useEffect } from "react";
import { LuSlidersHorizontal } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { setunread, unsetunread } from "../redux/slices/showunreadslice";

export default function MessageNavbar({}) {
  const [btn1, setBtn1] = useState('bg-white');
  const [btn2, setBtn2] = useState('bg-white');
  const [toggle, setToggle] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (toggle) {
      setBtn2('bg-white');
      setBtn1('bg-orange-300');
    } else {
      setBtn1('bg-white');
      setBtn2('bg-orange-300');
    }
  }, [toggle]);

  return (
    <div className="flex justify-between font-semibold my-2">
      <div className="text-lg">
        Messages
      </div>

      <div className="flex justify-center items-center gap-3">
        <div>
          <button 
            className={`border rounded-l-3xl ${btn1} px-2 border-slate-400`}
            onClick={() => {
              dispatch(unsetunread());
              setToggle(true);
            }}
          >
            All Messages
          </button>
          <button 
            className={`border-r border-t border-b ${btn2} rounded-r-3xl px-2 border-slate-400`}
            onClick={() => {
              dispatch(setunread());
              setToggle(false);
            }}
          >
            {`Unread (99+)`}
          </button>
        </div>

        <div className="flex justify-center items-center gap-1 border px-4 border-slate-400">
          <div><LuSlidersHorizontal /></div>
          <div>Filter Messages</div>
        </div>
      </div>
    </div>
  );
}
