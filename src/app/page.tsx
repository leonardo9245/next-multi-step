import { Buttons } from '@/components/buttons';
import { PrimaryForm } from '@/components/primary-form';

export default function Home() {
  return (
    <main className="bg-bgPage ">
      <div className="flex min-h-screen min-w-full flex-col items-center bg-bg-image-mobile bg-no-repeat bg-contain py-8  px-4 gap-8 relative">
        <div>1 2 3 4</div>
        <PrimaryForm />
        <Buttons />
      </div>
    </main>
  );
}
