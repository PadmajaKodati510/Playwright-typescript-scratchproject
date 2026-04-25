import { Page } from '@playwright/test';
import { BasePage } from './basePage';
import { Logger } from '../utils/helpers';

export class PaymentPage extends BasePage {
  // Payment selectors
  readonly NAME_ON_CARD = 'input[data-qa=\"name-on-card\"]';
  readonly CARD_NUMBER = 'input[data-qa=\"card-number\"]';
  readonly CVC = 'input[data-qa=\"cvc\"]';
  readonly EXPIRY_MONTH = 'input[data-qa=\"expiry-month\"]';
  readonly EXPIRY_YEAR = 'input[data-qa=\"expiry-year\"]';
  readonly PAY_BUTTON = 'button[data-qa=\"pay-button\"]';
  readonly DOWNLOAD_INVOICE = 'a[href*=\"download_invoice\"]';
  readonly ORDER_PLACED_MESSAGE = 'h2[data-qa=\"order-placed\"]';
  readonly ORDER_NUMBER = '.order-number';

  constructor(page: Page) {
    super(page);
  }

  async fillPaymentDetails(
    nameOnCard: string,
    cardNumber: string,
    cvc: string,
    expiryMonth: string,
    expiryYear: string
  ) {
    Logger.log('Filling payment details');
    await this.fill(this.NAME_ON_CARD, nameOnCard);
    await this.fill(this.CARD_NUMBER, cardNumber);
    await this.fill(this.CVC, cvc);
    await this.fill(this.EXPIRY_MONTH, expiryMonth);
    await this.fill(this.EXPIRY_YEAR, expiryYear);
  }

  async payAndConfirmOrder() {
    Logger.log('Confirming payment and order');
    await this.click(this.PAY_BUTTON);
    await this.page.waitForLoadState('networkidle');
  }

  async isOrderPlacedMessageVisible(): Promise<boolean> {
    return await this.isVisible(this.ORDER_PLACED_MESSAGE);
  }

  async downloadInvoice() {
    Logger.log('Downloading invoice');
    const downloadPromise = this.page.waitForEvent('download');
    await this.click(this.DOWNLOAD_INVOICE);
    return await downloadPromise;
  }
}