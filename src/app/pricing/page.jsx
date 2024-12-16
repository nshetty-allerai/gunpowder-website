// import React, { memo, useMemo, Suspense } from 'react';
// import { PricingHero, RightRounded, PricingLeftDesktop1, PricingLeftDesktop2, PricingRigthDesktop1, PricingLeftTab1, PricingRightTab1, PricingRightTab2, PricingLeftTab2, PricingLeftMobile1, PricingLeftMobile2, PricingRightMobile1, PricingRightMobile2 } from '@/utils/constants/constant'
// // PricingLeftDesktop1, PricingLeftDesktop2, PricingRigthDesktop1 , PricingLeftTab1,PricingRightTab1,PricingRightTab2, PricingLeftTab2,PricingLeftMobile1,PricingLeftMobile2,PricingRightMobile1,PricingRightMobile2
// import Image from 'next/image'
// import Questions from '@/components/UI/Questions';

// const boxShadowStyle1 = {
//   boxShadow: "0px 4px 6px -2px #10182808",
//   backdropFilter: "blur(475px)",
// };

// const boxShadowStyle2 = {
//   boxShadow: "0px 12px 16px -4px #10182814",
//   backdropFilter: "blur(475px)",
// };


// const cardData = [
//   {
//     key: 1,
//     planFor: 'Plan for',
//     title: 'Design',
//     description: 'Best if you need ad-hoc design',
//     questions: ['Design from scratch user research to Hi-Fi Design', 'Additional hour for £60/hour'],
//     button: 'Plans starting at £999'
//   },
//   {
//     key: 2,
//     planFor: 'Plan for',
//     title: 'Development',
//     description: 'Best if you have regular design needs',
//     questions: ['You’ll get 48 hours', 'Additional hour for £55/hour'],
//     button: 'Plans starting at £1999'
//   },
//   {
//     key: 3,
//     planFor: 'Enterprise plan',
//     title: 'Design & Development',
//     description: 'Want to develop whole app please contact',
//     questions: ['From Concept to Live Development', 'Dedicated team for you'],
//     button: 'Inquire Now'
//   }
// ]



// // const Card = ({ index, planFor, title, description, questions, button }) => {
// //   return (
// //     <div style={boxShadowStyle1} className='p-8 bg-[#32095140] border border-[#48025E] rounded-2xl h-full'>
// //       <p className='text-2xl'>{planFor}</p>
// //       <h6 className='text-4xl font-semibold mt-6 font-afacad'>{title}</h6>
// //       <p className='text-base mt-2'>{description}</p>
// //       <hr className='text-[#EAECF0] my-8' />
// //       {questions.map((question, i) => (<div key={i} className={`flex items-start gap-2 ${i !== questions?.length - 1 ? 'mb-2' : ''}`}>
// //         <div className='w-[5%]' key={i}>
// //           <Image
// //             src={RightRounded}
// //             alt='rounded'
// //             className='w-6 mt-1 '
// //           />
// //         </div>
// //         <div className='text-base w-[95%]'>
// //           {question}
// //         </div>
// //       </div>))}
// //       <hr className='text-[#EAECF0] my-8' />
// //       <div>
// //         <button className='py-3 rounded-[50px] bg-brand hover:bg-[#C9005B] transition-all duration-300 text-white w-full text-base'>
// //           {button}
// //         </button>
// //       </div>
// //     </div>
// //   )
// // }

// const Card = memo(({ index, planFor, title, description, questions, button }) => {
//   return (
//     <div style={boxShadowStyle1} className='p-8 bg-[#32095140] border border-[#48025E] rounded-2xl h-full'>
//       <p className='text-2xl'>{planFor}</p>
//       <h6 className='text-4xl font-semibold mt-6 font-afacad'>{title}</h6>
//       <p className='text-base mt-2'>{description}</p>
//       <hr className='text-[#EAECF0] my-8' />
//       {questions.map((question, i) => (<div key={i} className={`flex items-start gap-2 ${i !== questions?.length - 1 ? 'mb-2' : ''}`}>
//         <div className='w-[5%]' key={i}>
//           <Image
//             src={RightRounded}
//             alt='rounded'
//             className='w-6 mt-1 '
//           />
//         </div>
//         <div className='text-base w-[95%]'>
//           {question}
//         </div>
//       </div>))}
//       <hr className='text-[#EAECF0] my-8' />
//       <div>
//         <button className='py-3 rounded-[50px] bg-brand hover:bg-[#C9005B] transition-all duration-300 text-white w-full text-base'>
//           {button}
//         </button>
//       </div>
//     </div>
//   )
// })
// Card.displayName = "Card";

// const PlanDetailsData = [
//   {
//     key: 1,
//     questions: ["5+ design services", "Lorem Ipsum", "Dedicated Lead Designer"]
//   },
//   {
//     key: 2,
//     questions: ["Web design & development", "Average 1-2 days delivery", "Dedicated Project Manager"]
//   },
//   {
//     key: 3,
//     questions: ["Lorem Ipsum", "Unlimited design requests", "Unlimited revisions"]
//   },
//   {
//     key: 4,
//     questions: ["No contract", "Lorem Ipsum", "Managed via Slack "]
//   },
// ]

// // const PlanDetails = ({ questions, index }) => {
// //   return (
// //     <div className='h-fit'>
// //       {questions && questions.map((questions, i) => (<div key={i} className={`flex items-start gap-2 ${i !== questions?.length - 1 ? 'mb-2' : ''}`}>
// //         <div className='w-[5%]'>
// //           <Image
// //             src={RightRounded}
// //             alt='rounded'
// //             className='w-6 mt-1 '
// //           />
// //         </div>
// //         <div className='text-base'>
// //           {questions}
// //         </div>
// //       </div>))}
// //     </div>
// //   )
// // }

// const PlanDetails = memo(({ questions, index }) => {
//   return (
//     <div className='h-fit'>
//       {questions && questions.map((questions, i) => (<div key={i} className={`flex items-start gap-2 ${i !== questions?.length - 1 ? 'mb-2' : ''}`}>
//         <div className='w-[5%]'>
//           <Image
//             src={RightRounded}
//             alt='rounded'
//             className='w-6 mt-1 '
//           />
//         </div>
//         <div className='text-base'>
//           {questions}
//         </div>
//       </div>))}
//     </div>
//   )
// })
// PlanDetails.displayName = "PlanDetails"


// const Pricing = () => {


// const cardComponents = useMemo(() => cardData.map((item) => (
//   <Card
//     key={item.key}
//     planFor={item.planFor}
//     title={item.title}
//     description={item.description}
//     questions={item.questions}
//     button={item.button}
//   />
// )), []);


// const planDetailsComponents = useMemo(() => PlanDetailsData.map((item) => (
//   <PlanDetails key={item.key} questions={item.questions} />
// )), []);


//   return (
//     <>
//       <div className='relative max-w-[1440px] mx-auto'>
//         <div className='relative z-10'>
//           <section className='max-w-[1440px] mx-auto lg:mt-[90px] md:mt-[60px] mt-[50px] lg:mb-[40px] md:mb-[30px] mb-[20px]'>
//             <div className='flex items-center justify-between lg:px-14 px-6'>
//               <div>
//                 <h3 className='font-semibold lg:text-[64px] lg:leading-[80px] md:text-5xl text-4xl font-afacad'>Pricing plans</h3>
//                 <p className='lg:text-xl md:text-base text-lg md:mt-1 mt-4'>Simple, transparent pricing that grows with you. </p>
//                 <h3 className='font-medium text-2xl md:text-[32px] md:leading-[50px] lg:text-5xl lg:mt-14 mt-8'>Plans that suits for the design works</h3>
//               </div>
//               <div className='hidden lg:block'>
//                 <Image
//                   src={PricingHero}
//                   alt=""
//                   className="lg:w-[353px] "
//                 />
//               </div>
//             </div>
//           </section>
//           <section className='max-w-[1440px] mx-auto lg:mt-[150px] mt-20'>
//             <div className='grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 px-6 md:px-8 gap-7'>
//               {cardComponents}
//             </div>
//           </section>
//           <section className='max-w-[1440px] mx-auto lg:mt-[96px] md:mt-[50px] mt-8 mb-20 md:mb-0'>
//             <div className='md:px-8 px-4'>
//               <h3 className='lg:text-4xl mdtext-3xl text-2xl md:mb-10 mb-8'>What’s included in all plans</h3>
//               <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 px-6 py-8 md:gap-10  lg:bg-[#17012D40] md:bg-[#17012D8A] bg-[#17012db7] rounded-[19px] relative z-30'>
//                 {planDetailsComponents}
//               </div>
//             </div>
//           </section>
//           <section className='max-w-[1440px] mx-auto hidden md:block md:mt-[90px] lg:mt-[130px] md:mb-[90px] lg:mb-[115px]'>
//             <div style={{ background: 'linear-gradient(90.00deg, rgb(255, 0, 115),rgb(132, 0, 255) 100%)' }} className=' lg:py-[52px] lg:px-[52px] md:py-[92px] md:px-[40px] rounded-3xl relative md:mx-8 px-4'>
//               <div className='relative z-10'>
//                 <h2 className='font-afacad text-center font-bold  lg:text-5xl md:text-4xl '>Not sure if our subscription is right for you?  Got a project you would like to discuss?</h2>
//                 <div className='flex justify-center'>
//                   <button className='flex items-center gap-2 bg-white border-brand border text-brand cursor-pointer transition-all duration-300 w-fit px-6 py-2 md:px-6 md:py-[12px] rounded-[30px] lg:mt-14 md:mt-10 mt-4 relative'>
//                     <span className='text-base font-bold'>Let&apos;s Talk</span>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </div>
//       </div>

//     </>
//   )
// }

// export default Pricing






import React, { memo, useMemo, Suspense } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { PricingHero, RightRounded ,PricingLeftDesktop1, PricingLeftDesktop2, PricingRigthDesktop1 , PricingLeftTab1,PricingRightTab1,PricingRightTab2, PricingLeftTab2,PricingLeftMobile1,PricingLeftMobile2,PricingRightMobile1,PricingRightMobile2 } from '@/utils/constants/constant'
import PricingButton from '@/components/Pricing/PricingButton';
import PricingGradient from './PricingGradient';
const Questions = dynamic(() => import('@/components/UI/Questions'), { suspense: true });

const cardData = [
  {
    key: 1,
    planFor: 'Plan for',
    title: 'Design',
    description: 'Best if you need design only requirements',
    questions: [
      'User research to high-fidelity design, we create custom solutions from scratch.',
      'End-to-end design process, ensuring seamless transitions from research to high-fidelity design.',
    ],
    button: 'Plans starting at £999',
  },
  {
    key: 2,
    planFor: 'Plan for',
    title: 'Development',
    description: 'Best if you need development only requirements',
    questions: ['Full-stack development, delivering scalable and secure web and mobile solutions.', 'Seamless backend integration and API development for enhanced functionality.'],
    button: 'Plans starting at £1999',
  },
  {
    key: 3,
    planFor: 'Enterprise plan',
    title: 'Design & Development',
    description: 'Best if you have design & development requirements',
    questions: ['End-to-end design and development, from user research to high-fidelity design and robust coding.', 'Seamless integration of design and development for flawless functionality.'],
    button: 'Talk to us',
  },
];

const PlanDetailsData = [
  {
    key: 1,
    questions: ['Dedicated Project Manager for seamless coordination. ', 'Tailored solutions aligned with your goals.', 'Regular updates throughout the process.'],
  },
  {
    key: 2,
    questions: ['No hidden fees for complete transparency.', 'Managed via Slack for efficient communication.', 'Streamlined workflow ensuring timely delivery.'],
  },
  {
    key: 3,
    questions: ['Post-launch support for ongoing success.','Expert team delivering quality outcomes.','Scalable solutions for growing businesses.'],
  }
];

const Card = memo(({ planFor, title, description, questions, button  ,q }) => (
  <div className={`p-8 bg-[#32095140] border border-[#48025E] rounded-2xl h-full`}>
    <p className="text-2xl">{planFor}</p>
    <h6 className="text-4xl font-semibold mt-6 font-afacad">{title}</h6>
    <p className="text-base mt-2">{description}</p>
    <hr className="text-[#EAECF0] my-8" />
    {questions.map((question, index) => (
      <div key={index} className={`flex items-start gap-2 ${index !== questions.length - 1 ? 'mb-2' : ''}`}>
        <Image
          src={RightRounded}
          alt="rounded"
          width={24}
          height={24}
          loading="lazy"
        />
        <div className="text-base">{question}</div>
      </div>
    ))}
    <hr className={`text-[#EAECF0] ${q==2?'mt-14 mb-8':q==1?'mt-14 mb-8': 'my-8'}`} />
    {/* <button className="py-3 rounded-[50px] bg-brand hover:bg-[#C9005B] transition-all duration-300 text-white w-full text-base">
      {button}
    </button> */}
    <PricingButton>{button}</PricingButton>
  </div>
));
Card.displayName = "Card";

const PlanDetails = memo(({ questions }) => (
  <div className="h-fit">
    {questions.map((question, index) => (
      <div key={index} className={`flex items-start gap-2 ${index !== questions.length - 1 ? 'mb-3 lg:mb-4' : ''}`}>
        <Image
          src={RightRounded}
          alt="rounded"
          width={24}
          height={24}
          loading="lazy"
        />
        <div className="text-base">{question}</div>
      </div>
    ))}
  </div>
));
PlanDetails.displayName = "PlanDetails";

const Pricing = () => {
  const cardComponents = useMemo(() => cardData.map((item) => (
    <Card
      q={item.key}
      key={item.key}
      planFor={item.planFor}
      title={item.title}
      description={item.description}
      questions={item.questions}
      button={item.button}
    />
  )), []);

  const planDetailsComponents = useMemo(() => PlanDetailsData.map((item ,index) => (
      <PlanDetails key={item.key} questions={item.questions} />
  )), []);

  return (
    <div className="relative max-w-[1440px] mx-auto">
      <div className="relative z-10">
        {/* Hero Section */}
        <section className='max-w-[1440px] mx-auto lg:mt-[90px] md:mt-[120px] mt-[100px] lg:mb-[40px] md:mb-[30px] mb-[20px]'>
          <div className='flex items-center justify-between lg:px-14 px-6'>
            <div>
              <h3 className='font-semibold lg:text-[64px] lg:leading-[80px] md:text-5xl text-4xl font-afacad'>Pricing plans</h3>
              <p className='lg:text-xl md:text-base text-lg md:mt-1 mt-4'>Simple, transparent pricing for whatever needs your business has</p>
              {/* <h3 className='font-medium text-2xl md:text-[32px] md:leading-[50px] lg:text-5xl lg:mt-14 mt-8'>Plans that suits for the design works</h3> */}
            </div>
            <div className='hidden lg:block'>
              <Image
                src={PricingHero}
                alt=""
                className="lg:w-[353px] "
              />
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className='max-w-[1440px] mx-auto lg:mt-[150px] mt-20'>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-6 md:px-8 gap-7'>
            {cardComponents}
          </div>
        </section>

        {/* Plan Details */}
        <section className='max-w-[1440px] mx-auto lg:mt-[96px] md:mt-[50px] mt-8 mb-20 md:mb-[90px] lg:mb-[130px] '>
          <div className='md:px-8 px-4'>
            <h3 className='lg:text-4xl mdtext-3xl text-2xl md:mb-10 mb-8'>What&apos;s included in all plans</h3>
            <div className='grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 px-6 py-8 lg:gap-x-8 lg:gap-y-0 md:gap-y-8 lg:bg-[#17012D40] md:bg-[#17012D8A] bg-[#17012db7] rounded-[19px] relative z-30'>
              {planDetailsComponents}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        {/* <section className='max-w-[1440px] mx-auto md:mt-[90px] lg:mt-[130px] mb-[90px] lg:mb-[115px]'>
          <div style={{ background: 'linear-gradient(90.00deg, rgb(255, 0, 115),rgb(132, 0, 255) 100%)' }} className=' lg:py-[52px] lg:px-[52px] py-[92px] md:px-[40px] rounded-3xl relative md:mx-8 mx-6 px-6'>
            <div className='relative z-10'>
              <h2 className='font-afacad text-center font-bold  lg:text-5xl md:text-3xl text-2xl '>Not sure if our subscription is right for you?  Got a project you would like to discuss?</h2>
              <div className='flex justify-center'>
                <button className='flex items-center gap-2 bg-white border-brand border text-brand cursor-pointer transition-all duration-300 w-fit px-6 py-2 md:px-6 md:py-[12px] rounded-[30px] lg:mt-14 md:mt-10 mt-6 relative'>
                  <span className='text-base font-bold'>Let&apos;s Talk</span>
                </button>
              </div>
            </div>
          </div>
        </section> */}
        <PricingGradient 
          title={`"${"Bring your ideas to life schedule a call today!"}"`}
          description="Our team is here to help you succeed. Let&apos;s work together to achieve your goals and elevate your brand to new heights."
        />
      </div>



      {/* desktop */}
      <div className='hidden lg:block absolute top-0 left-0 z-0'>
        <Image
          src={PricingLeftDesktop1}
          className=''
          alt=''
        />
      </div>
      <div className='hidden lg:block absolute top-0 left-0 z-0'>
        <Image
          src={PricingLeftDesktop2}
          className=''
          alt=''
        />
      </div>
      <div className='hidden lg:block absolute top-[-200px] right-0 z-0'>
        <Image
          src={PricingRigthDesktop1}
          className=''
          alt=''
        />     
      </div>



      {/* tab */}

      <div className='lg:hidden hidden md:block absolute left-0 top-[-140px] z-0 w-full'>
        <Image
          src={PricingLeftTab1}
          className='w-full'
          alt=''
        />
      </div>

      <div className=' lg:hidden hidden md:block absolute left-0 z-0 top-[600px] w-full'>
        <Image
          src={PricingLeftTab2}
          className='w-full'
          alt=''
        />
      </div>
      <div className=' lg:hidden hidden md:block absolute right-0 top-[-600px] z-0 w-full'>
        <Image
          src={PricingRightTab2}
          className='w-full'
          alt='PricingRightTab2'
        />
      </div>
      <div className='lg:hidden hidden md:block absolute top-[200px] right-0 z-0 w-full'>
        <Image
          src={PricingRightTab1}
          className='w-full'
          alt=''
        />
      </div>

      {/* mobile */}
      <div className='md:hidden absolute left-0 top-[-400px] z-0 w-full'>
        <Image
          src={PricingLeftMobile1}
          className='w-full'
          alt=''
        />
      </div>
      <div className='md:hidden absolute left-0 top-[500px] z-0 w-full'>
        <Image
          src={PricingLeftMobile2}
          className='w-full'
          alt=''
        />
      </div>
    </div>
  );
};

export default Pricing;