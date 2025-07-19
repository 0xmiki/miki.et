{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  name = "personal-website-env1";

  buildInputs = with pkgs; [
    bun 
    nodejs
  ];
}
