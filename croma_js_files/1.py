import os
import subprocess

# 🔧 CHANGE THIS to your target directory
ROOT_DIR = r"/workspaces/domain_inspection/qwikcilver_egms"   # or "/home/user/yourfolder"

def process_files(root_dir):
    for root, dirs, files in os.walk(root_dir):
        for file in files:
            if file.endswith(".js.download"):
                old_path = os.path.join(root, file)

                # Rename file to .js
                new_file_name = file.replace(".js.download", ".js")
                new_path = os.path.join(root, new_file_name)

                try:
                    os.rename(old_path, new_path)
                    print(f"Renamed: {old_path} → {new_path}")

                    # Run Prettier to format the file
                    subprocess.run(
                        ["prettier", "--write", new_path],
                        check=True
                    )
                    print(f"Formatted: {new_path}")

                except Exception as e:
                    print(f"Error processing {old_path}: {e}")

if __name__ == "__main__":
    process_files(ROOT_DIR)
    print("✅ Done!")
