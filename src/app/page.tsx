import { Buttons } from '@/components/buttons';
import { StepPart } from '@/components/stepPart';
import { StepControl } from '@/components/step-control';

export default function Home() {
  return (
    <main className="bg-bgPage ">
      <div className="flex min-h-screen min-w-full flex-col items-center bg-bg-image-mobile bg-no-repeat bg-contain py-8  px-4 gap-8 relative">
        <StepPart />
        <StepControl />
      </div>
    </main>
  );
}
