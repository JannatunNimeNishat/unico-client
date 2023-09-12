import Link from 'next/link';
import React from 'react';

const Apply_online_instruction = () => {
    return (
        <div className='border px-5 py-5'>
            <h3 className='text-xl font-semibold'>Online apply Instruction</h3>
            <p className='py-5 text-gray-500'>Thank you for your interest in UNICO.
                <br />
                If you fulfill the admission criteria, you should read carefully the following instructions about submitting the application.
                <br />
                <br />
                Online Application Form is here:
                <Link href={`#`} className='text-[#9d2235] font-bold'> Apply online</Link>
            </p>
            <div className='mt-3  px-5 py-2'>
                <h3 className='text-xl font-semibold'>Application Prouder</h3>

                <ol className="list-decimal px-4 mt-4">
                    <li className='font-bold'>Instruction for online Application</li>
                    <p className='font-semibold pt-2'>Step-1: Pay Admission Test Fee by bKash:</p>
                    <ul class="list-disc px-4">
                        <li>Dial *247#</li>
                        <li>Press 4 for Payment</li>
                        <li>Marchant Wallet No. 017000000</li>
                        <li>Amount TK. 500</li>
                        <li>Reference No 1</li>
                        <li>Counter No. 1</li>
                        <li>Save the transaction ID and use it the application form.</li>
                    </ul>
                    <p className='pt-3 font-semibold'>Step-2: Fill up the Admission Test Form Click <Link href={`#`} className='text-[#9d2235] font-bold'> Apply online</Link>:</p>
                    <ul class="list-disc px-4">
                        <li>Fill up the form with all necessary information.</li>
                        <li>Store your username and password in a face place.</li>
                        <li>After filling up all the fields, you may either submit the application or may save it resume the process later.</li>
                    </ul>
                    <p className='pt-3 font-semibold'>Step-3: Print the Admit Card :</p>
                    <ul class="list-disc px-4">
                        <li>Log in using your username and password</li>
                        <li>Click on the Print Admit Card button</li>
                        <li>Bring your Admit card at the time of admission. For any query, contact: 017000000</li>
                    </ul>
                    <li className='font-bold mt-3'>Instruction for Application through Admission office:</li>
                    <p>Students can apply physically through admission office.</p>
                </ol>
                <p className='text-[#9d2235] font-semibold mt-4'>Note: Must Bring your Admit card on Admission Test</p>
            </div>


        </div>
    );
};

export default Apply_online_instruction;