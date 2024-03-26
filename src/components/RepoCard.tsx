import React from "react";
import Image from "next/image";
import { StarIcon } from "@chakra-ui/icons";
import { Repository } from "@/entities/Repository";
import {
  Box,
  Text,
  Link,
  Card,
  CardHeader,
  Heading,
  IconButton,
} from "@chakra-ui/react";

interface RepoCardProps {
  noCTA?: boolean;
  data: Repository;
  isFavorite?: boolean;
  onFavorite?: (repo: Repository) => void;
}

export default function RepoCard({
  data,
  noCTA,
  isFavorite,
  onFavorite,
}: RepoCardProps) {
  return (
    <Card variant="outline" p={6} mb={2} width="100%">
      <CardHeader
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        paddingX={0}
        paddingTop={0}
      >
        <Box display="flex" flexDirection="row">
          <Image
            src="/assets/book.svg"
            width="20"
            height="20"
            alt="repo-image"
          />
          <Link href={data.html_url} target="_blank" color="blue.500" mt="2">
            <Heading as="h4" size="md">
              {data.full_name}
            </Heading>
          </Link>
        </Box>
        {!noCTA &&
          (isFavorite ? (
            <StarIcon color="yellow.400" boxSize={5} />
          ) : (
            <IconButton
              isRound={true}
              variant="solid"
              colorScheme="blue"
              aria-label="favorite"
              size={"sm"}
              fontSize="12px"
              onClick={() => onFavorite?.(data)}
              icon={<StarIcon color="white" />}
            />
          ))}
      </CardHeader>
      <Text fontSize="sm" color="gray.600">
        {data.description}
      </Text>
      <Box
        mt="4"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
      >
        <Box display="flex" flexDirection="row" alignItems="center">
          <Image
            src="/assets/code.svg"
            width="15"
            height="15"
            alt="repo-star-image"
          />
          <Text fontSize="small" ml="2">
            {data.language}
          </Text>
        </Box>
        <Box display="flex" flexDirection="row" alignItems="center">
          <Image
            src="/assets/star.svg"
            width="15"
            height="15"
            alt="repo-star-image"
          />
          <Text fontSize="small" mr="6">
            {data.stargazers_count}
          </Text>
          <Image
            src="/assets/fork.svg"
            width="15"
            height="15"
            alt="repo-fork-image"
          />
          <Text fontSize="small">{data.forks_count}</Text>
        </Box>
      </Box>
    </Card>
  );
}
