import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950 text-white">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold">📚 Lektura</h1>

        <p className="text-zinc-400">
          AI-powered reading platform.
        </p>

        <SignedOut>
          <div className="flex justify-center gap-4">
            <SignInButton mode="modal">
              <button className="rounded-lg bg-white px-5 py-2 text-black">
                Sign In
              </button>
            </SignInButton>

            <SignUpButton mode="modal">
              <button className="rounded-lg border border-white px-5 py-2">
                Sign Up
              </button>
            </SignUpButton>
          </div>
        </SignedOut>

        <SignedIn>
          <div className="flex flex-col items-center gap-4">
            <UserButton />

            <p className="text-green-400">
              ✅ You are signed in!
            </p>
          </div>
        </SignedIn>
      </div>
    </main>
  );
}