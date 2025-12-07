import { Registry } from "./schema";

export const registry: Registry = [
    {
        name: "accordion",
        type: "registry:ui",
        dependencies: ["@radix-ui/react-accordion"],
        files: [{ path: "ui/accordion.tsx", type: "registry:ui", target: "components/ui/accordion.tsx" }]
    },
    {
        name: "alert",
        type: "registry:ui",
        roles: ["alert"],
        dependencies: ["class-variance-authority", "lucide-react"],
        files: [{ path: "ui/alert.tsx", type: "registry:ui", target: "components/ui/alert.tsx" }]
    },
    {
        name: "alert-dialog",
        type: "registry:ui",
        dependencies: ["@radix-ui/react-alert-dialog"],
        files: [{ path: "ui/alert-dialog.tsx", type: "registry:ui", target: "components/ui/alert-dialog.tsx" }]
    },
    {
        name: "aspect-ratio",
        type: "registry:ui",
        dependencies: ["@radix-ui/react-aspect-ratio"],
        files: [{ path: "ui/aspect-ratio.tsx", type: "registry:ui", target: "components/ui/aspect-ratio.tsx" }]
    },
    {
        name: "avatar",
        type: "registry:ui",
        dependencies: ["@radix-ui/react-avatar"],
        files: [{ path: "ui/avatar.tsx", type: "registry:ui", target: "components/ui/avatar.tsx" }]
    },
    {
        name: "badge",
        type: "registry:ui",
        dependencies: ["class-variance-authority"],
        files: [{ path: "ui/badge.tsx", type: "registry:ui", target: "components/ui/badge.tsx" }]
    },
    {
        name: "button",
        type: "registry:ui",
        dependencies: ["@radix-ui/react-slot", "class-variance-authority"],
        files: [{ path: "ui/button.tsx", type: "registry:ui", target: "components/ui/button.tsx" }]
    },
    {
        name: "calendar",
        type: "registry:ui",
        dependencies: ["react-day-picker", "date-fns"],
        files: [{ path: "ui/calendar.tsx", type: "registry:ui", target: "components/ui/calendar.tsx" }]
    },
    {
        name: "card",
        type: "registry:ui",
        dependencies: [],
        files: [{ path: "ui/card.tsx", type: "registry:ui", target: "components/ui/card.tsx" }]
    },
    {
        name: "carousel",
        type: "registry:ui",
        dependencies: ["embla-carousel-react"],
        files: [{ path: "ui/carousel.tsx", type: "registry:ui", target: "components/ui/carousel.tsx" }]
    },
    {
        name: "checkbox",
        type: "registry:ui",
        dependencies: ["@radix-ui/react-checkbox"],
        files: [{ path: "ui/checkbox.tsx", type: "registry:ui", target: "components/ui/checkbox.tsx" }]
    },
    {
        name: "collapsible",
        type: "registry:ui",
        dependencies: ["@radix-ui/react-collapsible"],
        files: [{ path: "ui/collapsible.tsx", type: "registry:ui", target: "components/ui/collapsible.tsx" }]
    },
    {
        name: "command",
        type: "registry:ui",
        dependencies: ["cmdk"],
        files: [{ path: "ui/command.tsx", type: "registry:ui", target: "components/ui/command.tsx" }]
    },
    {
        name: "context-menu",
        type: "registry:ui",
        dependencies: ["@radix-ui/react-context-menu"],
        files: [{ path: "ui/context-menu.tsx", type: "registry:ui", target: "components/ui/context-menu.tsx" }]
    },
    {
        name: "dialog",
        type: "registry:ui",
        dependencies: ["@radix-ui/react-dialog"],
        files: [{ path: "ui/dialog.tsx", type: "registry:ui", target: "components/ui/dialog.tsx" }]
    },
    {
        name: "drawer",
        type: "registry:ui",
        dependencies: ["vaul"],
        files: [{ path: "ui/drawer.tsx", type: "registry:ui", target: "components/ui/drawer.tsx" }]
    },
    {
        name: "dropdown-menu",
        type: "registry:ui",
        dependencies: ["@radix-ui/react-dropdown-menu"],
        files: [{ path: "ui/dropdown-menu.tsx", type: "registry:ui", target: "components/ui/dropdown-menu.tsx" }]
    },
    {
        name: "form",
        type: "registry:ui",
        dependencies: ["@radix-ui/react-label", "@radix-ui/react-slot", "react-hook-form", "zod", "@hookform/resolvers"],
        files: [{ path: "ui/form.tsx", type: "registry:ui", target: "components/ui/form.tsx" }]
    },
    {
        name: "hover-card",
        type: "registry:ui",
        dependencies: ["@radix-ui/react-hover-card"],
        files: [{ path: "ui/hover-card.tsx", type: "registry:ui", target: "components/ui/hover-card.tsx" }]
    },
    {
        name: "input",
        type: "registry:ui",
        dependencies: [],
        files: [{ path: "ui/input.tsx", type: "registry:ui", target: "components/ui/input.tsx" }]
    },
    {
        name: "label",
        type: "registry:ui",
        dependencies: ["@radix-ui/react-label"],
        files: [{ path: "ui/label.tsx", type: "registry:ui", target: "components/ui/label.tsx" }]
    },
    {
        name: "menubar",
        type: "registry:ui",
        dependencies: ["@radix-ui/react-menubar"],
        files: [{ path: "ui/menubar.tsx", type: "registry:ui", target: "components/ui/menubar.tsx" }]
    },
    {
        name: "navigation-menu",
        type: "registry:ui",
        dependencies: ["@radix-ui/react-navigation-menu"],
        files: [{ path: "ui/navigation-menu.tsx", type: "registry:ui", target: "components/ui/navigation-menu.tsx" }]
    },
    {
        name: "pagination",
        type: "registry:ui",
        dependencies: ["lucide-react"],
        files: [{ path: "ui/pagination.tsx", type: "registry:ui", target: "components/ui/pagination.tsx" }]
    },
    {
        name: "popover",
        type: "registry:ui",
        dependencies: ["@radix-ui/react-popover"],
        files: [{ path: "ui/popover.tsx", type: "registry:ui", target: "components/ui/popover.tsx" }]
    },
    {
        name: "progress",
        type: "registry:ui",
        dependencies: ["@radix-ui/react-progress"],
        files: [{ path: "ui/progress.tsx", type: "registry:ui", target: "components/ui/progress.tsx" }]
    },
    {
        name: "radio-group",
        type: "registry:ui",
        dependencies: ["@radix-ui/react-radio-group"],
        files: [{ path: "ui/radio-group.tsx", type: "registry:ui", target: "components/ui/radio-group.tsx" }]
    },
    {
        name: "resizable",
        type: "registry:ui",
        dependencies: ["react-resizable-panels"],
        files: [{ path: "ui/resizable.tsx", type: "registry:ui", target: "components/ui/resizable.tsx" }]
    },
    {
        name: "scroll-area",
        type: "registry:ui",
        dependencies: ["@radix-ui/react-scroll-area"],
        files: [{ path: "ui/scroll-area.tsx", type: "registry:ui", target: "components/ui/scroll-area.tsx" }]
    },
    {
        name: "select",
        type: "registry:ui",
        dependencies: ["@radix-ui/react-select"],
        files: [{ path: "ui/select.tsx", type: "registry:ui", target: "components/ui/select.tsx" }]
    },
    {
        name: "separator",
        type: "registry:ui",
        dependencies: ["@radix-ui/react-separator"],
        files: [{ path: "ui/separator.tsx", type: "registry:ui", target: "components/ui/separator.tsx" }]
    },
    {
        name: "sheet",
        type: "registry:ui",
        dependencies: ["@radix-ui/react-dialog"],
        files: [{ path: "ui/sheet.tsx", type: "registry:ui", target: "components/ui/sheet.tsx" }]
    },
    {
        name: "slider",
        type: "registry:ui",
        dependencies: ["@radix-ui/react-slider"],
        files: [{ path: "ui/slider.tsx", type: "registry:ui", target: "components/ui/slider.tsx" }]
    },
    {
        name: "sonner",
        type: "registry:ui",
        dependencies: ["sonner", "next-themes"],
        files: [{ path: "ui/sonner.tsx", type: "registry:ui", target: "components/ui/sonner.tsx" }]
    },
    {
        name: "switch",
        type: "registry:ui",
        dependencies: ["@radix-ui/react-switch"],
        files: [{ path: "ui/switch.tsx", type: "registry:ui", target: "components/ui/switch.tsx" }]
    },
    {
        name: "table",
        type: "registry:ui",
        dependencies: [],
        files: [{ path: "ui/table.tsx", type: "registry:ui", target: "components/ui/table.tsx" }]
    },
    {
        name: "tabs",
        type: "registry:ui",
        dependencies: ["@radix-ui/react-tabs"],
        files: [{ path: "ui/tabs.tsx", type: "registry:ui", target: "components/ui/tabs.tsx" }]
    },
    {
        name: "textarea",
        type: "registry:ui",
        dependencies: [],
        files: [{ path: "ui/textarea.tsx", type: "registry:ui", target: "components/ui/textarea.tsx" }]
    },
    {
        name: "toggle",
        type: "registry:ui",
        dependencies: ["@radix-ui/react-toggle"],
        files: [{ path: "ui/toggle.tsx", type: "registry:ui", target: "components/ui/toggle.tsx" }]
    },
    {
        name: "toggle-group",
        type: "registry:ui",
        dependencies: ["@radix-ui/react-toggle-group"],
        files: [{ path: "ui/toggle-group.tsx", type: "registry:ui", target: "components/ui/toggle-group.tsx" }]
    },
    {
        name: "tooltip",
        type: "registry:ui",
        dependencies: ["@radix-ui/react-tooltip"],
        files: [{ path: "ui/tooltip.tsx", type: "registry:ui", target: "components/ui/tooltip.tsx" }]
    }
];
