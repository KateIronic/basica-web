import useUser from "@/components/hooks/useUser";
import useZap from "@/components/hooks/useZap";

const CustomHook = () => {
  const { user } = useUser();
  const { zaps } = useZap();

  const hook = { user, zaps };

  return hook;
};

export default CustomHook;