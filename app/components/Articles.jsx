"use client";
import React, { useState } from 'react';
import ArticleCard from './ArticleCard';
import Pagination from './Pagination';

const articlesData = [
  { id: 1, title: 'Grilled Tomatoes at Home', description: 'PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard...', image: 'https://s3-alpha-sig.figma.com/img/47d5/04a0/5c72c6b4f096bbbec0680ab784a5dcef?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OsAJOSqxqp2eO6mzogCNobo~ol7N0M2F2d65u2MdMD6z2x74dcg6gdSiEnNJ10U3yuWm-ub48jGUyJXCR1BMX-WeHpbA1Ip20ogDX8aXmvdVuDoov71dnX-nZP63DVAJc~mz41IFnjTjan4ntfAVauTiRZ-s2MqTUzjlV2jUa5zCnzUDbBMURc4-1cTHDJMySrN-22BzeHxPI6L7eaVQsAmjzrjUM-zICvmWzZnVcGu7DNF3mYUBW4yUnJ7uZCXPSkAUPIXdl9m42TcJuariTSLBL5USeQEyo6k1YiBUVvKkRqARHpd6KbMwaFpUHp6W0On05ejSC2KZZ8W8RH6ATQ__' },
  { id: 2, title: 'Snacks for Travel', description: 'PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard...', image: 'https://s3-alpha-sig.figma.com/img/c6dd/5c3b/71e2cd1709116400deb9af41ed9aa012?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GVNS6NHp8RlHS~kqsdxN1LjF7K0xUbcENCU1bygo~jE3uhVnLqCBbAtgbnrJkmylhg44NnvSYC9hJLRw2Sq2Ut7zw5DIWaADyqYDywH~O0GuWn-CFE9OqKmMNGYjLASAwfDZFvxVxPg4Z4UISPx-a1tRO3cdMFw~0Nm3uEuDM4-nHwS9~zDQ1R3x9qiyWfH6hy~RWsGjaS1NSBvXhQsxlxnpeBb02ZmYtWSZHWU2aNGmoGWx2RvUL5zAPrUklavkvpa~bN0KhT8lC9G5XWgEFM3QX1Dc9u2osDm3X4DK86c-U~7p2qwmwIpy2qUcwn-ORXwNexEQQLS-IMUZTNJl-w__' },
  { id: 3, title: 'Post-workout Recipes', description: 'PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard...', image: 'https://s3-alpha-sig.figma.com/img/01b6/596f/5a4907f80afeb54b1849b81ebf1eb5f2?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GZn5wN8ABmtgV3lMjhH56vZbtxf-PP6z~ur5oAzAXuhgMEkZ4M15UEQXaj6CeQxsKsrbiv6R8xZsqqiXtyv7J5R7HwuwdPRg0nwNmss0HDVALz6psN3Jll8tF5cGz0gUDYGiIkG29T4V3QA88h~5ojbXisdztrIEqn9yUy1i-GX65fwzSYgY4Lo-ABFx5P2RZe6NIsKTdYOA4YIIINah6wKF9GtUjVPrC~A8bBf~IgiZiI-t5eMkf2OUdU6KNCiSO~4r8FAKNC-UjwLLE-YPAMg7dbWc6ibcUNRmLL6L1ub~DfQeb6XiLEJTDGZJCjJp-M3DqVBoSuK3nDKjClvn2w__' },
  { id: 4, title: 'How To Grill Corn', description: 'PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard...', image: 'https://s3-alpha-sig.figma.com/img/b457/cb75/2678ff07019c289fb72556852cc6b74f?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kTvQsxjHL1gl1gmKMXIe21v5XHbeu7QQ7LIXsrAq593RJmMPPGVCcUohmpHjes0OKMBstuX3PRugxnSqdcwvnfvfvQSg6HSNLYw0GOHP7eOArdXBjC1H2gC72QOKLHq2kEPWZ55XpXlwRCmCfhVoxgRhLq7P~MrKZgpBLa8CsMC8M4NPEl-a~TGHImnQ3kFYrT28LvJ8sohkRt~dEQ5T9enNDffdfOddzW8utbzZOlsD692FUSq2Zg6Q~wtfW8sB3z2JLYscOYx9DwjXQV-KFppiMZoo5imr0xtMiAnUwntpRTUVsTMEabVGgB8coR6NvCAqL8Z8a3j-gUyYFftosw__' },
  { id: 5, title: 'Crunchwrap Supreme', description: 'PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard...', image: 'https://s3-alpha-sig.figma.com/img/36f0/05b2/98fb3af9a51a3627a968ca95735063e2?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QN0oGMwDGbuzYxf9llzmkda4ubuKQXuPRYtM7D~qOGPu6Cs5b5~prDZo0o9u6bOb6irPtIA2hu2bmfOWkjT77sXgqKO9ouJxCL-NrUDTqzx5egocqO-aXBkn4Ox9Cw1acT4mV-emIkyQvMNqxxF-R-O4tH2-p07QIsNBVcttfaouAU5fOLOHmfC-7L07R4x5pRJfiRAEBZ66MPXKQWOAclyR1XrUX7Tf0COsMGM46v0-8qxcO5tefiyajK4T-gLR3VN-XITPTNky9~6lG-WnfgbzoadhW28AYDfdXpqrEqsxCL2JudqRhsug~jx0Tui9V45NEn3CuEOkqntvs01Ycw__' },
  { id: 6, title: 'Broccoli Cheese Soup', description: 'PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard...', image: 'https://s3-alpha-sig.figma.com/img/60f8/cba1/6ae830e61504aecaf6d8b547eb08589a?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ijcDZY8VJwS3HQ3i0neMqlmNh05T7fEAXB2MgjvwwubhEXn1kk66s7F76nEuGPSYODzSm3tv1bkEs8Fw4bMh9MxtR2WZ~tRZOez4ycMZBZDvoQhX12UTV2Dlw-X9OVSCXBqXUhEuoTPUeW~pUTYmSHLhInl8uYapmaof0PTVLOBQ7KMhBg2KYLZ0mY5xfIkxKwuBEQRR-ihhsrwQJ4HkQR0CxK-KNI5P0gH4V605Xo06ZGeYAMd62ugaKjm8xdPdScyPxWkuTicCa2Zz1n~u-uBoD-Jx7EzKlrnM4-ixzsseqMEPDC54nwS3tQDNNqO~hgpqsB~3qwPcOt0BlX69yQ__' },
];

const Articles = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 3;

  const totalPages = Math.ceil(articlesData.length / articlesPerPage);

  const startIndex = (currentPage - 1) * articlesPerPage;
  const currentArticles = articlesData.slice(startIndex, startIndex + articlesPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  return (
    <div className="px-4 md:px-20 lg:px-44 mt-16 md:mt-32">
      <h2 className="text-2xl md:text-3xl font-semibold text-blue-950 text-center md:text-left font-sourceSans">Latest Articles</h2>
      <div className="mt-8 flex flex-wrap justify-center gap-6 md:gap-10 lg:gap-10 mb-16">
        {currentArticles.map(article => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
      <div className='mt-8 mb-4'>
        <Pagination currentPage={currentPage} totalPages={totalPages} nextPage={nextPage} prevPage={prevPage} />
      </div>
    </div>
  );
};

export default Articles;
