import { Publisher, OrderCreatedEvent, Subjects } from '@waritsanticketing/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
