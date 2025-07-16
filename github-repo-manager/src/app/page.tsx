"use client";
import Image from "next/image";
import gitLogo from '../../assets/github.png'
import Input from "@/components/Input";
import { useState } from "react";
import Item from "@/components/Item";
import Button from "@/components/Button";

interface Repo {
  name: string;
  description: string;
  url: string;
}

export default function Home() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearchRepo = async (query: string) => {
    if (!query) {
      setRepos([]);
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(`https://api.github.com/search/repositories?q=${query}`);
      const data = await response.json();
      setRepos(
        (data.items || []).map((repo: Repo) => ({
          name: repo.name,
          description: repo.description,
          url: repo.html_url,
        }))
      );
    } catch (error) {
      setRepos([]);
      console.error("Error fetching repositories:", error);
    }
    setLoading(false);
  }
  return (
    <>
      <div className="flex pt-20 pb-20 h-full flex-col items-center bg-gray-900">
        <Image
          src={gitLogo}
          alt=""
          width={202}
          height={202}
          className="rounded-full"
        />
        <Input value={query} onChange={(e) => setQuery(e.target.value)} />
        <Button onClick={() => handleSearchRepo(query)} />
        {loading && <div className="text-white mt-4">Loading...</div>}
        {
          repos.map(({ name, description, url }, key) => (
            <Item
              key={key}
              name={name}
              description={description}
              url={url}
              onRemove={() => {
                setRepos((prev) => prev.filter((_, i) => i !== key));
              }}
            />
          ))
        }
      </div>
    </>
  );
}

