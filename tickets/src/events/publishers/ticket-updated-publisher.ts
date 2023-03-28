import { Publisher, Subjects, TicketUpdatedEvent } from '@waritsanticketing/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
