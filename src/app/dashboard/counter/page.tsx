import { CartCounter } from "@/shopping-cart";

export const metadata = {
  title: "Counter Page",
  description: "Counter Page Description",
};

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <CartCounter value={20} />
    </div>
  );
}
