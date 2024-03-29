import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  VideoIcon,
} from "lucide-react";

export const routes = {
  DASHBOARD: {
    bgColor: null,
    color: "text-sky-500",
    href: "/dashboard",
    icon: LayoutDashboard,
    label: "Dashboard",
    isTool: false,
  },
  CONVERSATION: {
    bgColor: "bg-violet-500/10",
    color: "text-violet-500",
    href: "/conversation",
    icon: MessageSquare,
    label: "Conversation",
    isTool: true,
  },
  IMAGE: {
    bgColor: "bg-pink-700/10",
    color: "text-pink-700",
    href: "/image",
    icon: ImageIcon,
    label: "Image Generation",
    isTool: true,
  },
  VIDEO: {
    bgColor: "bg-orange-700/10",
    color: "text-orange-700",
    href: "/video",
    icon: VideoIcon,
    label: "Video Generation",
    isTool: true,
  },
  MUSIC: {
    bgColor: "bg-emerald-500/10",
    color: "text-emerald-500",
    href: "/music",
    icon: Music,
    label: "Music Generation",
    isTool: true,
  },
  CODE: {
    bgColor: "bg-green-700/10",
    color: "text-green-700",
    href: "/code",
    icon: Code,
    label: "Code Generation",
    isTool: true,
  },
  SETTINGS: {
    bgColor: null,
    color: null,
    href: "/settings",
    icon: Settings,
    label: "Settings",
    isTool: false,
  },
};
