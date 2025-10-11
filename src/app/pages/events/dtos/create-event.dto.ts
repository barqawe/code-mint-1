export class CreateEventDto {
  eventNameEn: string = '';
  eventNameAr: string = '';
  eventDescriptionEn: string = '';
  eventDescriptionAr: string = '';
  eventDate: string = '';
  eventTime: string = '';
  active: boolean = true;
  eventPrice: number = 0;
  eventSubCategory: string = '';
  eventAvailableQuantity: number = 0;
  eventSections?: Array<{
    sectionTitle: string;
    sectionItems: Array<{
      itemNameAr: string;
      itemNameEn: string;
    }>;
  }> = [];
  eventImages: string[] = [];


}