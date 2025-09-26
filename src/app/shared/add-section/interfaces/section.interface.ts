export interface Section {
  sectionId: number;
  
  sectionTitle: string;
  sectionItems: Array<{
    itemNameAr: string;
    itemNameEn: string;
  }>;
}