import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


export default function Credits() {
    return (
        <div className="fixed bottom-3 left-3 text-sm text-gray-500 z-50 flex items-center gap-2">
            <p>
                Made by Atharva Desai
            </p>

            <div className="flex gap-2 justify-end">
                <a href="https://www.linkedin.com/in/atharva-desai-92b665391/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-orange-600 transition"
                >
                    <FaLinkedin size={20}/>
                </a>    

                <a
                href="https://github.com/atharvadesai167"
                target="_blank"
                rel="noreferrer"
                className="hover:text-orange-600 transition"
                >
                    <FaGithub size={20}/>

                </a>

            </div>

        </div>
    );
}