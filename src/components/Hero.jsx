import React from 'react';

const Hero = () => {
  return (
    <div className="bg-[#3B4050] py-20">
      <section className="px-3 text-gray-200 md:container mx-auto">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className='max-w-[600px]'>
            <h1 className="text-6xl text-[#fff] font-bold font-oswald">
              Responsive Layouts{' '}
              <span className="text-[#A59678]"> don't have to be struggle</span>
            </h1>
          </div>

          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
              molestiae cum cupiditate possimus quasi nemo repudiandae
              laboriosam atque, eius dicta, corporis neque dolor vero cumque
              officia suscipit, laborum quo rerum!
            </p>
            <button>i want to learn</button>
          </div>
        </div>
      </section>

      </div>
  );
};

export default Hero;
