import Image from "next/image";

export default function Home() {
  return (
    <div className="min-w-screen p-0 m-0">
        
        {/* Hero Section: Needs a catchy headline (e.g., "Power Your Home with the Sun"). */}
        <div className="h-4/5 text-wrap text-[60px] font-bold leading-tight p-4 bg-center bg-no-repeat flex flex-col items-start justify-start"
             style={{
               backgroundImage: `url("data:image/svg+xml,%3csvg width='97' height='163' viewBox='0 0 97 163' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='97' height='163' fill='white'/%3e%3ccircle cx='75' cy='39' r='11' fill='%23FFA600'/%3e%3c/svg%3e")`,
               backgroundSize: 'cover',
               backgroundPosition: 'center'
             }}>
              <div className="animate-slide-in-1 text-[50px] text-black " >Power</div>
              <div className="animate-slide-in-2 text-[50px] text-black " >Your</div>
              <div className="animate-slide-in-3 text-[50px] text-black " >Home</div>
              <div className="animate-slide-in-4 text-[50px] text-black" >with</div>
              <div className="animate-slide-in-5 text-[50px] text-black " >the</div>
              <div className="animate-slide-in-6 text-[70px] text-sun" >Sun</div>
        </div>
        
        {/* Call to Action (CTA): A button linking to the Contact page ("Get a FreeQuote").*/}
        <div className="bg-white h-150 w-screen  justify-center items-center flex flex-col gap-4"
             style={{
               backgroundImage: `url("data:image/svg+xml,%3csvg width='100' height='195' viewBox='0 0 100 195' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3crect x='1.17096' width='97' height='195' fill='white'/%3e%3crect x='1.17096' y='40' width='97' height='105' fill='black'/%3e%3cpath d='M1.2983 39.8944L21.671 23L31.921 31.5L54.671 5L70.671 29.2744L85.171 15.5L98.171 28.5V40L77.671 39.8944H42.0436L42.171 40L1.2983 39.8944Z' fill='black'/%3e%3cpath d='M1.17096 40L1.2983 39.8944M1.2983 39.8944L21.671 23L31.921 31.5M1.2983 39.8944L42.171 40L42.0436 39.8944M31.921 31.5L54.671 5L70.671 29.2744M31.921 31.5L42.0436 39.8944M77.671 39.8944H42.0436M77.671 39.8944L70.671 29.2744M77.671 39.8944L98.171 40V28.5L85.171 15.5L70.671 29.2744' stroke='black'/%3e%3cpath d='M23.671 168.5L1.17096 145H52.171H98.671V168.5L77.671 186L37.921 156.75L23.671 168.5Z' fill='black'/%3e%3cpath d='M52.171 145H1.17096L23.671 168.5L37.921 156.75M52.171 145L37.921 156.75M52.171 145H98.671V168.5L77.671 186L37.921 156.75' stroke='black'/%3e%3cpath d='M13.171 27H10.171L13.0899 24.5676C13.0951 24.5633 13.0999 24.54 13.1045 24.5H11.171L13.1631 22.0099C13.1644 21.8398 13.1656 21.6689 13.1665 21.5H12.171L13.171 20L14.171 21.5H13.1665C13.1656 21.6689 13.1644 21.8398 13.1631 22.0099L13.171 22L15.171 24.5H13.171L16.171 27H13.171Z' fill='black'/%3e%3cpath d='M13.171 30.5V27M13.171 27H10.171L13.0899 24.5676M13.171 27H16.171L13.171 24.5M13.171 27V22M13.171 24.5H11.171L13.171 22M13.171 24.5H15.171L13.171 22M13.171 24.5L13.0899 24.5676M13.0899 24.5676C13.1547 24.5135 13.171 21.5 13.171 20M13.171 20L12.171 21.5H14.171L13.171 20Z' stroke='black'/%3e%3cpath d='M22.171 21H19.171L22.0899 18.5676C22.0951 18.5633 22.0999 18.54 22.1045 18.5H20.171L22.1631 16.0099C22.1644 15.8398 22.1656 15.6689 22.1665 15.5H21.171L22.171 14L23.171 15.5H22.1665C22.1656 15.6689 22.1644 15.8398 22.1631 16.0099L22.171 16L24.171 18.5H22.171L25.171 21H22.171Z' fill='black'/%3e%3cpath d='M22.171 24.5V21M22.171 21H19.171L22.0899 18.5676M22.171 21H25.171L22.171 18.5M22.171 21V16M22.171 18.5H20.171L22.171 16M22.171 18.5H24.171L22.171 16M22.171 18.5L22.0899 18.5676M22.0899 18.5676C22.1547 18.5135 22.171 15.5 22.171 14M22.171 14L21.171 15.5H23.171L22.171 14Z' stroke='black'/%3e%3cpath d='M17.171 164.5L20.171 164.5L17.2521 166.932C17.2469 166.937 17.242 166.96 17.2374 167L19.171 167L17.1789 169.49C17.1775 169.66 17.1764 169.831 17.1754 170L18.171 170L17.171 171.5L16.171 170L17.1754 170C17.1764 169.831 17.1775 169.66 17.1789 169.49L17.171 169.5L15.171 167L17.171 167L14.171 164.5L17.171 164.5Z' fill='black'/%3e%3cpath d='M17.171 161L17.171 164.5M17.171 164.5L20.171 164.5L17.2521 166.932M17.171 164.5L14.171 164.5L17.171 167M17.171 164.5L17.171 169.5M17.171 167L19.171 167L17.171 169.5M17.171 167L15.171 167L17.171 169.5M17.171 167L17.2521 166.932M17.2521 166.932C17.1872 166.986 17.171 170 17.171 171.5M17.171 171.5L18.171 170L16.171 170L17.171 171.5Z' stroke='black'/%3e%3cpath d='M57.171 172.5L60.171 172.5L57.2521 174.932C57.2469 174.937 57.242 174.96 57.2374 175L59.171 175L57.1789 177.49C57.1775 177.66 57.1764 177.831 57.1754 178L58.171 178L57.171 179.5L56.171 178L57.1754 178C57.1764 177.831 57.1775 177.66 57.1789 177.49L57.171 177.5L55.171 175L57.171 175L54.171 172.5L57.171 172.5Z' fill='black'/%3e%3cpath d='M57.171 169L57.171 172.5M57.171 172.5L60.171 172.5L57.2521 174.932M57.171 172.5L54.171 172.5L57.171 175M57.171 172.5L57.171 177.5M57.171 175L59.171 175L57.171 177.5M57.171 175L55.171 175L57.171 177.5M57.171 175L57.2521 174.932M57.2521 174.932C57.1872 174.986 57.171 178 57.171 179.5M57.171 179.5L58.171 178L56.171 178L57.171 179.5Z' stroke='black'/%3e%3cpath d='M83.171 183.5L86.171 183.5L83.2521 185.932C83.2469 185.937 83.242 185.96 83.2374 186L85.171 186L83.1789 188.49C83.1775 188.66 83.1764 188.831 83.1754 189L84.171 189L83.171 190.5L82.171 189L83.1754 189C83.1764 188.831 83.1775 188.66 83.1789 188.49L83.171 188.5L81.171 186L83.171 186L80.171 183.5L83.171 183.5Z' fill='black'/%3e%3cpath d='M83.171 180L83.171 183.5M83.171 183.5L86.171 183.5L83.2521 185.932M83.171 183.5L80.171 183.5L83.171 186M83.171 183.5L83.171 188.5M83.171 186L85.171 186L83.171 188.5M83.171 186L81.171 186L83.171 188.5M83.171 186L83.2521 185.932M83.2521 185.932C83.1872 185.986 83.171 189 83.171 190.5M83.171 190.5L84.171 189L82.171 189L83.171 190.5Z' stroke='black'/%3e%3cpath d='M86.171 14H83.171L86.0899 11.5676C86.0951 11.5633 86.0999 11.54 86.1045 11.5H84.171L86.1631 9.00987C86.1644 8.83976 86.1656 8.6689 86.1665 8.5H85.171L86.171 7L87.171 8.5H86.1665C86.1656 8.6689 86.1644 8.83976 86.1631 9.00987L86.171 9L88.171 11.5H86.171L89.171 14H86.171Z' fill='black'/%3e%3cpath d='M86.171 17.5V14M86.171 14H83.171L86.0899 11.5676M86.171 14H89.171L86.171 11.5M86.171 14V9M86.171 11.5H84.171L86.171 9M86.171 11.5H88.171L86.171 9M86.171 11.5L86.0899 11.5676M86.0899 11.5676C86.1547 11.5135 86.171 8.5 86.171 7M86.171 7L85.171 8.5H87.171L86.171 7Z' stroke='black'/%3e%3c/svg%3e")`,
               backgroundSize: 'cover',
               backgroundPosition: 'center'
             }}>
          <div className="text-[22px] text-white">Get a quote Today</div>
          <button className="bg-black hover:bg-amber-500 focus:bg-sun focus:border-black focus:text-black rounded-[10px] px-6 py-3 border-2 border-white text-white">
            Get Started
          </button>
        </div>

        {/* Features: Highlight 3 key benefits: Save Money, Eco-Friendly, 25-Year Warranty */}
        <div className=" h-140 justify-center items-center flex flex-col gap-4">
          <div className=" w-2/3 p-3 text-center text-2xl font-bold">Save Money</div>
          <div>and enjoy a</div>
          <div className=" w-2/3 p-3 text-center text-2xl font-bold">25-Year Warranty</div>
          <div>while staying</div>
          <div className=" w-2/3 p-3 text-center text-2xl font-bold">Eco-Friendly</div>
          <div>with</div>
          <div className="font-bold text-3xl">
            <div className="text-sun">Lumina</div>
            <div>Solar</div>
            <div>Solutions</div>
          </div>
        </div>

    </div>
  );
}

// #002363 blue
