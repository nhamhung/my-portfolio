import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Box, Button, Input, Link, Text, Textarea } from "@chakra-ui/react";

import { profile, subsectionContent } from "../../data/portfolio";
import type { ContactFormInput } from "../../utils/contact";
import { buildMailtoUrl } from "../../utils/contact";
import ArtisticSectionIntro from "./ArtisticSectionIntro";

const blankForm: ContactFormInput = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function ArtisticContact() {
  const [form, setForm] = useState(blankForm);
  const change = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.location.href = buildMailtoUrl(form, profile.email);
  };
  return (
    <Box
      as="section"
      id="contact"
      className="artistic-gallery-section artistic-closing-composition"
      data-presentation="artistic-contact"
      data-testid="contact-section"
    >
      <ArtisticSectionIntro sectionId="contact" />
      <Box className="artistic-contact-canvas">
        <Box>
          <Text className="artistic-contact-channels-title">
            {subsectionContent.contact.channelsTitle}
          </Text>
          <Link href={`mailto:${profile.email}`}>{profile.email}</Link>
          <Text>{profile.location}</Text>
          {profile.socialLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.ariaLabel}
            >
              {link.label}
            </Link>
          ))}
        </Box>
        <form onSubmit={submit}>
          <Box>
            <label htmlFor="artistic-contact-name">Name *</label>
            <Input
              id="artistic-contact-name"
              name="name"
              value={form.name}
              onChange={change}
              required
              data-testid="contact-name-input"
            />
          </Box>
          <Box>
            <label htmlFor="artistic-contact-email">Email *</label>
            <Input
              id="artistic-contact-email"
              name="email"
              type="email"
              value={form.email}
              onChange={change}
              required
              data-testid="contact-email-input"
            />
          </Box>
          <Box>
            <label htmlFor="artistic-contact-subject">Subject</label>
            <Input
              id="artistic-contact-subject"
              name="subject"
              value={form.subject}
              onChange={change}
              data-testid="contact-subject-input"
            />
          </Box>
          <Box>
            <label htmlFor="artistic-contact-message">Message *</label>
            <Textarea
              id="artistic-contact-message"
              name="message"
              value={form.message}
              onChange={change}
              required
              data-testid="contact-message-input"
            />
          </Box>
          <Button type="submit" data-testid="contact-submit">
            Send message
          </Button>
        </form>
      </Box>
    </Box>
  );
}

export default ArtisticContact;
