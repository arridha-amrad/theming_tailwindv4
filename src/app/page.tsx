import BackgroundOptions from "@/components/BackgroundOptions";
import Button from "@/components/Button";
import ButtonIcons from "@/components/ButtonIcons";
import ColorOptions from "@/components/ColorOptions";
import InputText from "@/components/Input";
import SearchInput from "@/components/SearchInput";
import Link from "next/link";

export default function Page() {
  return (
    <main className="container mx-auto p-4">
      <div className="rounded-skin border-skin-border w-full max-w-md space-y-4 border p-6">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">Login</h1>
        </div>
        <InputText />
        <SearchInput />
        <ButtonIcons />
        <Button />
      </div>
      <div className="mt-8 mb-4 w-full max-w-md">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint
          consectetur a blanditiis fugiat repudiandae aspernatur repellat
          cupiditate ipsam impedit?&nbsp;
          <Link className="text-skin-primary" href="/">
            Read more...
          </Link>
        </p>
      </div>
      <ColorOptions />
      <BackgroundOptions />
    </main>
  );
}
