import { StepPart } from '@/components/stepPart';
import { StepControl } from '@/components/step-control';

export default function Home() {
  return (
    <main className="bg-bgPage min-h-screen md:flex md:items-center md:justify-center overflow-hidden max-h-screen max-w-[100vw] relative">
      <div className="flex min-h-screen max-w-full flex-col items-center bg-bg-image-mobile bg-no-repeat bg-contain py-8  px-4 gap-8 relative md:flex-row md:bg-none md:justify-center md:min-h-full  md:bg-white md:gap-0 md:py-4 md:rounded-xl md:shadow-md md:box-border md:max-h-[700px] md:items-start md:max-w-[870px] box-border">
        <StepPart />
        <StepControl />
      </div>
    </main>
  );
}
