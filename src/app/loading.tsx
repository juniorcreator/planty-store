import Spinner from "@/components/Spinner";

export default function Loading() {
  return (
    <div className="min-h-full h-[90vh] flex items-center justify-center">
      <Spinner />
    </div>
  );
}
