import React, { useState } from "react";
import { Button, FormControl, FormHelperText, Input, InputLabel } from "@mui/material";
import { useNavigate } from "react-router-dom"
import { FaClipboardList, FaClipboardCheck } from "react-icons/fa6";
import { useAuth } from "contexts/AuthContext";
import UserForm from "form";

function ReferForm() {
  const { userData } = useAuth();
  const navigate = useNavigate();
  const [isCopied, setIsCopied] = useState(false);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const showTooltip = () => setIsTooltipVisible(true);
  const hideTooltip = () => setIsTooltipVisible(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsCopied(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(userData.referral_code)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 1500);
      })
      .catch(err => console.error('Could not copy text: ', err));
  };

  return (
    <div className="flex items-center justify-center py-20 bg-slate-300">
      <div className="h-auto sm:w-4/6 lg:w-3/6 bg-white p-16 shadow-2xl rounded-xl">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold flex items-center justify-center md:px-10">
            Copy & Share Referral code
          </h2>
        </form>

        <div class="w-auto  mt-8">
          <div class="flex items-center">
            <span class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg dark:bg-gray-600 dark:text-white dark:border-gray-600">CODE</span>
            <div class="relative w-full">
              <input
                type="text"
                class="bg-gray-50 border border-e-0 border-gray-300 text-gray-500 dark:text-gray-400 text-sm border-s-0 focus:ring-blue-500 focus:border-blue-200 block w-full p-2.5"
                value={userData.referral_code}
                readonly disabled
              />
            </div>
            <button
              class="flex-shrink-0 z-10 inline-flex items-center py-3 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-e-lg hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 border-blue-700 hover:border-blue-800"
              type="button"
              onClick={copyToClipboard}
              onMouseEnter={showTooltip}
              onMouseLeave={hideTooltip}
              onFocus={showTooltip}
              onBlur={hideTooltip}
            >
              {!isCopied ? (<span id="default-icon">
                <FaClipboardList className="h-4 w-4" />
              </span>
              ) : (<span id="success-icon">
                <FaClipboardCheck className="h-5 w-5" />
              </span>)}
            </button>
            <div className={`flex flex-col z-10 px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm ${isTooltipVisible ? 'opacity-100' : 'opacity-0 invisible'} tooltip`}>
              <span id="default-tooltip-message">{isCopied ? "Copied!" : "Copy"}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center mt-5 font-bold text-3xl">OR</div>
        <h2 className="text-2xl font-bold flex items-center justify-center mt-2">
          Fill the form to refer a friend
        </h2>
        
        <UserForm />
        <div className="flex items-center justify-between">
          <div className="mt-6 l">
            <Button variant="contained" type="submit">Send</Button>
          </div>
          <div className="mt-6">
            <Button variant="contained" onClick={() => navigate("/")} sx={{ marginRight: 4 }}>Back</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReferForm
