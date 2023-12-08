import React from "react";
import Image from "next/image";
import Img from "../../../../public/user-1.jpg";
import Nail from "../../../../public/nail.jpg";
import BC from "../../../../public/bc.png";
import High from "../../../../public/high.jpg";
import Khadi from "../../../../public/logo-2.jpg";
import Littlesaheel from "../../../../public/littlesaheel.jpg";
import OK from "../../../../public/ok.png";
import Rest from "../../../../public/rest.png";

interface ReviewProps {
  name: string;
  role: string;
  avatarSrc: any;
  reviewText: string;
}

const ReviewCard: React.FC<ReviewProps> = ({
  name,
  role,
  avatarSrc,
  reviewText,
}) => {
  return (
    <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
      <div className="flex gap-4">
        <Image
          className="w-12 h-12 rounded-full"
          src={avatarSrc}
          alt=""
          width={200}
          height={200}
          loading="lazy"
        />
        <div>
          <h6 className="text-lg font-medium text-gray-700 dark:text-white">
            {name}
          </h6>
          <p className="text-sm text-gray-500 dark:text-gray-300">{role}</p>
        </div>
      </div>
      <p className="mt-8">{reviewText}</p>
    </div>
  );
};

const ReviewsSection: React.FC = () => {
  return (
    <div className="text-gray-600 dark:text-gray-300 mt-8" id="reviews">
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6 p-5">
        <div className="mb-10 space-y-4 px-6 md:px-0">
          <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
            Don`t just take our word for it...
          </h2>
        </div>
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 space-y-8">
          {/* Replace the data with your actual data */}
          <ReviewCard
            name="Nail Technologies"
            role="CEO"
            avatarSrc={Nail}
            reviewText="Impressed by the seamless collaboration with NYM Technologies Limited on a complex software development project. Their team's technical prowess and dedication to understanding our unique needs made the experience truly exceptional."
          />
          <ReviewCard
            name="Bradford College Kano"
            role="Director"
            avatarSrc={BC}
            reviewText="Working with NYM Technologies Limited on our web development project was a pleasure. Their creative team brought our vision to life, and the end result exceeded our expectations. Responsive, innovative, and professional—highly recommended!"
          />
          <ReviewCard
            name="Diligent Basic & Remedial"
            role="CEO"
            avatarSrc={Img}
            reviewText="From conception to execution, NYM Technologies Limited displayed exceptional agility during our software development project. Their ability to adapt to changing requirements and deliver a high-quality product was commendable. A reliable partner!"
          />
          <ReviewCard
            name="Highflyers Academy Kano"
            role="Head Teacher"
            avatarSrc={High}
            reviewText="The AI solutions provided by NYM Technologies Limited have streamlined our decision-making processes. The intelligent systems they implemented have proven to be invaluable, providing us with insights that have a direct impact on our success."
          />
          <ReviewCard
            name="Khadi Kaku Fashion House"
            role="CEO"
            avatarSrc={Khadi}
            reviewText="Choosing NYM Technologies Limited for web development was the best decision for my small business. They delivered a website that not only reflects our brand but also attracts and engages our customers. Fantastic results!"
          />
          <ReviewCard
            name="OK United"
            role="IT Support"
            avatarSrc={OK}
            reviewText="Impressed by the seamless collaboration with NYM Technologies Limited on a complex software development project. Their team's technical prowess and dedication to understanding our unique needs made the experience truly exceptional."
          />
          <ReviewCard
            name="Little Saliheen"
            role="IT coordinator"
            avatarSrc={Littlesaheel}
            reviewText="As the IT coordinator for our elementary school, I can't praise NYM Technologies Limited enough for their School Management System. It's intuitive, efficient, and has significantly reduced our administrative workload. A fantastic tool for educators!"
          />
          <ReviewCard
            name="Reset Business Hub"
            role="CEO"
            avatarSrc={Rest}
            reviewText="Working with NYM Technologies Limited on our corporate website was a pleasure. Their creative approach, attention to detail, and quick turnaround exceeded our expectations. Our website is now a powerful tool for client engagement."
          />
          {/* Add more ReviewCard components for each review */}
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
