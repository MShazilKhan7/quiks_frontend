import React, { useState } from "react";
import TextSizeSelector from "../../components/bookRead/TextSizeSelector";
import Chapter from "../../components/bookRead/Chapter";

const BookRead = () => {
  const [textSize, setTextSize] = useState(2);

  return (
    <div className="px-4 py-8 md:px-28 md:py-8">
      <div className="w-full flex justify-end items-baseline gap-3">
        <TextSizeSelector textSize={textSize} setTextSize={setTextSize} />
      </div>
      {chapters.map((chapter, index) => (
          <Chapter key={index} chapter_no={index} title={chapter.title} content={chapter.content} />
      ))}
      <AudioPlayer />
    </div>
  );
};

export default BookRead;

const AudioPlayer = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-primary border-t border-gray-200 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-indigo-500 hover:text-primary text-primary bg-gray-200 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
              </svg>
            </button>
            <button className="p-2 hover:bg-indigo-500 hover:text-primary text-primary bg-gray-200 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
            <button className="p-2 hover:bg-indigo-500 hover:text-primary text-primary bg-gray-200 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div className="flex-1 mx-4">
            <div className="flex items-center">
              <span className="text-sm text-white-500">0:00</span>
              <div className="flex-1 h-1 bg-gray-200 rounded-full mx-2">
                <div className="h-1 bg-indigo-600 rounded-full w-1/3"></div>
              </div>
              <span className="text-sm text-white-500">32:00</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Data From Backend
const chapters = [
  {
    title: "Introduction",
    content: `I believe the cost of getting to know AI— really getting to know
 AI— is at least three sleepless nights.
After a few hours of using generative AI systems, there
will come a moment when you realize that Large Language
Models (LLMs), the new form of AI that powers services like
ChatGPT, don’t act like you expect a computer to act. Instead,
they act more like a person. It dawns on you that you are interacting with something new, something alien, and that things
are about to change. You stay up, equal parts excited and nervous,
wondering: What will my job be like? What job will my kids be
able to do? Is this thing thinking? You go back to your computer
in the middle of the night and make seemingly impossible requests, only to see the AI fulfi ll them. You realize the world
has changed in fundamental ways and that nobody can really
tell you what the future will look like. `,
  },
  {
    title: "Chapter 1",
    content: `alking about AI can be confusing, in part because AI
has meant so many diff erent things and they all tend
to get muddled together. Siri telling you a joke on command. The Terminator crushing a skull. Algorithms predicting
credit scores.
We’ve long had a fascination with machines that can think.
In 1770, the invention of the fi rst mechanical chess computer
stunned those who saw it— a chessboard set upon an elaborate
cabinet, with its chess pieces manipulated by a robot dressed
as an Ottoman wizard. It toured the world from 1770 to 1838.
The machine, also known as the Mechanical Turk, beat Ben
Franklin and Napoleon in chess matches and led Edgar Allan Poe to speculate on the possibility of artifi cial intelligence
upon seeing it in the 1830s. It was all a lie, of course— the machine cleverly hid a real chess master inside its fake gears, but
our ability to believe that machines might be able to think
fooled many of the best minds in the world for three quarters
of a century.`,
  },
  {
    title: "Chapter 2",
    content: `Fast- forward to 1950, when a toy and a thought experiment,
each developed by a diff erent genius of the still-developing
fi eld of computer science, led to a new conception of artifi cial
intelligence. The toy was a jury- rigged mechanical mouse
called Theseus, developed by Claude Shannon, an inventor,
prankster, and the greatest information theorist of the twentieth century. In a 1950 fi lm, he revealed that Theseus, powered
by repurposed telephone switches, could navigate through a
complex maze— the fi rst real example of machine learning.
The thought experiment was the imitation game, where computer pioneer Alan Turing fi rst laid out the theories about how
a machine could develop a level of functionality suffi cient to
mimic a person. While computers were a very new invention,
Turing’s infl uential paper helped kick off the nascent fi eld of
artifi cial intelligence.
Theories alone were not enough, and a handful of early
computer scientists started working on programs that pushed
the boundaries of what was soon called artifi cial intelligence, a
term invented in 1956 by John McCarthy of MIT. Progress was
initially rapid as computers were programmed to solve logic.`,
  },
  {
    title: "Chapter 3",
    content: `No one really knows where this is all heading, including me.
Yet, despite not having defi nitive answers, I think I can be a
useful guide. I have found myself to be an infl uential voice on
the implications of AI, particularly through my newsletter,
One Useful Thing, even though I am not a computer scientist myself. Indeed, I think that one of my advantages in understanding AI is that, as a professor at Wharton, I have long studied and written about how technologies are used. As a result,
my coauthors and I have published some of the fi rst research
on AI in education and in business, and we have been experimenting with practical uses of AI in ways that major AI companies have cited as examples. I regularly speak with organizations,
companies, and government agencies, as well as with many AI
experts, to understand the world we are making. I also attempt
to keep up with the fl ood of research in the fi eld, much of it in the
form of scientifi c working papers that have not yet gone through
the long process of peer review but still off er valuable data
about this new phenomenon (I will be citing a lot of this early
work in the book to help fi ll in the picture of where we are
headed, but it is important to realize that the fi eld is evolving
rapidly). Based on all these conversations and papers, I can assure you that there is nobody who has the complete picture of
what AI means, and even the people making and using these
systems do not understand their full implications.`,
  },
];
