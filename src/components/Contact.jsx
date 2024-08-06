import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import { Send } from "@mui/icons-material";

function Contact() {
    const mailTo = () => {
        window.location = "mailto:lvmcounselling@gmail.com";
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 bg-mdBrown text-brightWhite">
            <div className="flex flex-col justify-start items-center text-center md:items-start md:text-start m-8 gap-10">
                <div className="text-4xl md:text-6xl my-8">
                    Contact Us
                </div>
                <div className="text-base md:text-xl">
                    It is a long established fact that a reader will be distracted by the readable content of a page.
                </div>
                <div
                  className="flex flex-row items-center justify-center cursor-pointer bg-brightWhite rounded-lg p-2 text-darkTeal hover:opacity-80 transition-all ease-out "
                  onClick={mailTo}
                >
                  <MailIcon fontSize="medium" className="text-darkTeal" />
                  lvmcounselling@gmail.com
                </div>
            </div>
                <form>
                    <div className="flex flex-col justify-center items-start text-center text-black m-8 md:m-14 gap-5">

                        
                        <input
                            className="rounded-lg p-2 w-full lg:w-3/4 "
                            type="text"
                            placeholder="Name *"
                            required
                        />
                        <input
                            className="rounded-lg p-2 w-full lg:w-3/4 "
                            type="email"
                            placeholder="Email *"
                            required 
                        />
                        <textarea
                        className="rounded-lg p-2 h-60 w-full"
                        name="message"
                        placeholder="Enter Message *"
                        required
                        />
                        <div className="">
                            <button type="submit" className="flex justify-start items-center bg-brightWhite text-darkTeal text-xl px-6 py-2 rounded-lg hover:bg-darkTeal hover:text-mdWhite transition-all duration-150 ease-out cursor-pointer">
                                <Send htmlColor="text-darkTeal" />                        
                                <span className="ml-2">Submit</span>
                            </button>
                        </div>
                    </div>
                </form>
        </div>
    )
}

export default Contact
