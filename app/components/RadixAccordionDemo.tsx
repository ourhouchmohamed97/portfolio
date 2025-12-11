import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
  } from '@/components/animate-ui/components/radix/accordion';
  
  const ITEMS = [
    {
      title: "Crafting Responsive Digital Experiences",
      content:
        "Designing and developing web apps that adapt beautifully to every device, with smooth performance and solid API integrations.",
    },
    {
      title: "System Architecture & Scalability",
      content:
        "Design modular project structures focused on performance, maintainability, and long-term scalability.",
    },
    {
      title: "Secure Integrations & Backend Services",
      content:
        "Implement authentication, APIs, and payment systems with robust, modern security best practices.",
    },
  ];
  
  type RadixAccordionDemoProps = {
    multiple?: boolean;
    collapsible?: boolean;
    keepRendered?: boolean;
    showArrow?: boolean;
  };
  
  export const RadixAccordionDemo = ({
    multiple = false,
    collapsible = true,
    keepRendered = false,
    showArrow = true,
  }: RadixAccordionDemoProps) => {
    return (
      <Accordion
        type={multiple ? 'multiple' : 'single'}
        collapsible={collapsible}
        className="max-w-[400px] w-full"
      >
        {ITEMS.map((item, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger showArrow={showArrow}>
              {item.title}
            </AccordionTrigger>
            <AccordionContent keepRendered={keepRendered}>
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    );
  };