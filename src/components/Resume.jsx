import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';


const Resume = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = `https://drive.google.com/uc?export=download&id=1QeRakrG7YFAp1q1hRyYYL_OvrTz8QwpB`; 
        link.download = 'Fahmida_Fahmi_Resume.pdf';
        link.click();
    };

    return (
        <div className="flex justify-center items-center h-auto">
            <motion.button
                onClick={handleDownload}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-[#1d1836] text-white px-6 py-3 rounded-lg shadow-md font-semibold"
            >
                Download My Resume
            </motion.button>
        </div>
    );
};

const WrappedResume = SectionWrapper(Resume, 'resume');
export default WrappedResume;
