import React from 'react';
import CustomButton from './CustomButton';

const AIPicker = ({ promt, setPromt, generatingImg, handleSubmit }) => {
    return (
        <div className="aipicker-container">
            <textarea className="aipicker-textarea" placeholder="Ask Ai...." rows={5} value={promt} onChange={(e) => setPromt(e.target.value)} />

            <div className="flex flex-wrap gap-3">
                {generatingImg ? (
                    <CustomButton type="outline" title="Asking AI..." customStyle="text-xs" />
                ) : (
                    <>
                        <CustomButton type="outline" title="AI Logo" handleClick={() => handleSubmit('logo')} customStyle="text-xs" />

                        <CustomButton type="filled" title="AI Full" handleClick={() => handleSubmit('full')} customStyle="text-xs" />
                    </>
                )}
            </div>
        </div>
    );
};

export default AIPicker;
