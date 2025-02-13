export interface IPicture{
    id:number;
    link?: string;
    fileContent?: File;
    fileContentType?: string;
    isCover: boolean;
}