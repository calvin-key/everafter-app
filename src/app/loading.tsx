import { Loader2 } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex h-[90vh] items-center justify-center">
      <Loader2 className="h-16 w-16 animate-spin" />
    </div>
  );
};

export default Loading;
